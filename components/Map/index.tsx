"use client"
import React,{ useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"


export default function Map(){
    const mapRef= React.useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly",
                
              });
            const { Map } = await loader.importLibrary('maps') as google.maps.MapsLibrary
            
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary
            const position = {
    
                lat: 43.65776723178754,
                lng: -79.37880702314729
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
            const marker = new Marker({
                map: map,
                position: position
            })
        }
        initMap()
        console.log("initMap")

    },[])
    return (
       
        <div id="map" ref={mapRef} className="w-full h-full"/>
   
        
    )
}