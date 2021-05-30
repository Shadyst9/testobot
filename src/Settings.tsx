import React from 'react'

interface SettingsProps {
    apartmentWidth: Number;
    apartmentHeight: Number;
    testobotX: Number;
    testobotY: Number;
}

export default function Settings(props: SettingsProps) {
    return (
        <div>
            <div>ApartmentWidth: {props.apartmentWidth}</div>
            <div>ApartmentHeight: {props.apartmentHeight}</div>
            <div>TestobotX: {props.testobotX}</div>
            <div>TestobotY: {props.testobotY}</div>
        </div>
    )
}