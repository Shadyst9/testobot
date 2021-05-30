import React, { ChangeEventHandler } from 'react'

interface SettingsProps {
    apartmentWidth: number;
    apartmentHeight: number;
    testobotX: number;
    testobotY: number;
    changeApartmentWidth: ChangeEventHandler<HTMLInputElement>;
    changeApartmentHeight: ChangeEventHandler<HTMLInputElement>;
    changeTestobotX: ChangeEventHandler<HTMLInputElement>;
    changeTestobotY: ChangeEventHandler<HTMLInputElement>;
}

export default function Settings(props: SettingsProps) {
    return (
        <div>
            <div>
                <label>ApartmentWidth</label>
                <input type="number" value={props.apartmentWidth} onChange={props.changeApartmentWidth} />
            </div>
            <div>
                <label>ApartmentHeight</label>
                <input type="number" value={props.apartmentHeight} onChange={props.changeApartmentHeight} />
            </div>
            <div>
                <label>TestobotX</label>
                <input type="number" value={props.testobotX} onChange={props.changeTestobotX} />
            </div>
            <div>
                <label>TestobotY</label>
                <input type="number" value={props.testobotY} onChange={props.changeTestobotY} />
            </div>
        </div>
    )
}