import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {  MAP_API_KEY } from "../Apikey";

const getCoordinatesFromCity = async (city) => {
    const apiKey = MAP_API_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { latitude: lat, longitude: lng };
    } else {
        throw new Error("No coordinates found for the city");
    }
};

const getAddressFromLatLng = async (latitude, longitude) => {
    const apiKey = MAP_API_KEY;
    console.log("apikey", apiKey);

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        return data.results[0].formatted;
    } else {
        throw new Error("No address found");
    }
};

export const MapWithCity = ({ city }) => {
    const [coordinates, setCoordinates] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        getCoordinatesFromCity(city)
            .then((coords) => setCoordinates(coords))
            .catch((err) => console.error(err));
    }, [city]);

    useEffect(() => {
        if (coordinates && !mapRef.current) {
            const { latitude, longitude } = coordinates;

            const map = L.map("map").setView([latitude, longitude], 13);
            mapRef.current = map;


            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
            }).addTo(map);


            const marker = L.marker([latitude, longitude]).addTo(map);

            getAddressFromLatLng(latitude, longitude)
                .then((address) => {
                    marker.bindPopup(`<b>Address:</b> ${address}`).openPopup();
                })
                .catch((err) => {
                    console.error(err);
                    marker.bindPopup("<b>Error fetching address</b>").openPopup();
                });
        }
    }, [coordinates]);

    return <div id="map" style={{ height: "300px", width: "80%" }}></div>;
};


