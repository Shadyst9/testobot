import React, { ChangeEventHandler } from 'react'
import "./Settings.css";

interface SettingsProps {
    apartmentWidth: number;
    apartmentHeight: number;
    testobotX: number;
    testobotY: number;
    testobotDirection: string;
    changeApartmentWidth: ChangeEventHandler<HTMLInputElement>;
    changeApartmentHeight: ChangeEventHandler<HTMLInputElement>;
    changeTestobotX: ChangeEventHandler<HTMLInputElement>;
    changeTestobotY: ChangeEventHandler<HTMLInputElement>;
}

export default function Settings(props: SettingsProps) {
    return (
        <div className="settings">
            <div>
                <h2>Wohnung</h2>
                <div>
                    <label>Breite: </label>
                    <input type="number" value={props.apartmentWidth} onChange={props.changeApartmentWidth} />
                </div>
                <div>
                    <label>Höhe: </label>
                    <input type="number" value={props.apartmentHeight} onChange={props.changeApartmentHeight} />
                </div>
                <div>Fläche: {props.apartmentWidth * props.apartmentHeight}m²</div>
            </div>
            <div>
                <h2>Testobot</h2>
                <div>
                    <label>Testobot-X: </label>
                    <input type="number" value={props.testobotX} onChange={props.changeTestobotX} />
                </div>
                <div>
                    <label>Testobot-Y: </label>
                    <input type="number" value={props.testobotY} onChange={props.changeTestobotY} />
                </div>
                <div>Richtung: {props.testobotDirection}</div>
            </div>
        </div>
    )
}