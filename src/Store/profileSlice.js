import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin: false,
    isEditModuleOpen: false,
    EditableProfile: {},
    imgUrl: "",
    isSearching: false,
    searchedProfile: {},
    profiles: [
        {
            id: 1,
            name: "Amit Sharma",
            description: "Software Developer at InfoTech Pvt. Ltd.",
            photo: "https://res.cloudinary.com/dxavgp3fo/image/upload/v1734062725/fbocny1vjv2ok6c7kqlo.jpg",
            contact: "amit.sharma@example.com",
            interests: "Coding, Cricket",
            address: "Bangalore, Karnataka, India",
        },
        {
            id: 2,
            name: "Priya Verma",
            description: "UX/UI Designer at Creatix Designs",
            photo: "https://res.cloudinary.com/dxavgp3fo/image/upload/v1734062734/yidbxkhdnc3vrnqhpfmv.jpg",
            contact: "priya.verma@example.com",
            interests: "Design, Painting",
            address: "Delhi, India",
        },
        {
            id: 3,
            name: "Ravi Patel",
            description: "Data Scientist at Data Solutions Inc.",
            photo: "https://res.cloudinary.com/dxavgp3fo/image/upload/v1734062736/n45bn6j66lzl6ywkkpiw.jpg",
            contact: "ravi.patel@example.com",
            interests: "Machine Learning, Traveling",
            address: "Ahmedabad, Gujarat, India",
        },
        {
            id: 4,
            name: "Neha Gupta",
            description: "Digital Marketer at AdMedia Group",
            photo: "https://res.cloudinary.com/dxavgp3fo/image/upload/v1734062736/sfruewklpij67yn2a1s1.jpg",
            contact: "neha.gupta@example.com",
            interests: "Marketing, Yoga",
            address: "Mumbai, Maharashtra, India",
        },
        {
            id: 5,
            name: "Sandeep Reddy",
            description: "Full Stack Developer at Tech Innovations",
            photo: "https://res.cloudinary.com/dxavgp3fo/image/upload/v1734062488/jb1msqlkaugedsjl0d3x.jpg",
            contact: "sandeep.reddy@example.com",
            interests: "Coding, Football",
            address: "Hyderabad, Telangana, India",
        }
    ]

}

const profileSlice = createSlice({
    name: "profiles",
    initialState,
    reducers: {
        setAdmin: (state) => {
            state.isAdmin = !state.isAdmin
        },
        setEditModule: (state) => {
            state.isEditModuleOpen = !state.isEditModuleOpen
        },
        setEditableProfile: (state, actions) => {
            state.EditableProfile = state.profiles.find((f) => f.id === actions.payload) || {}
        },
        updateProfile: (state, action) => {
            const updatedProfile = action.payload;
            state.profiles = state.profiles.map(profile =>
                profile.id === updatedProfile.id ? updatedProfile : profile
            );
        },
        DeleteProfile: (state, action) => {
            state.profiles = state.profiles.filter((p) => p.id !== action.payload)
        },
        addProfile: (state, action) => {
            const newProfile = action.payload;
            const nextId = state.profiles.length ? Math.max(...state.profiles.map(p => p.id)) + 1 : 1;
            state.profiles.push({ ...newProfile, id: nextId });
        },
        setImgUrl: (state, action) => {
            state.imgUrl = action.payload
        },
        setSearching: (state, action) => {
            state.isSearching = action.payload
        },
        setSearchProfile: (state, actions) => {
            const searchQuery = actions.payload.toLowerCase();
            const filteredProfiles = state.profiles.filter(
                (profile) =>
                    profile.name.toLowerCase().includes(searchQuery) ||
                    profile.description.toLowerCase().includes(searchQuery) ||
                    profile.address.toLowerCase().includes(searchQuery)
            );
            state.searchedProfile = filteredProfiles;
        },
    }
})

export const { setAdmin, setEditableProfile, setEditModule, updateProfile, DeleteProfile, addProfile, setImgUrl, setSearching, setSearchProfile } = profileSlice.actions
export default profileSlice.reducer