import React, { FunctionComponent } from 'react';
import './propertyDisplay.scss';

export interface IPropertyDisplayProps {
    icon: JSX.Element;
    title: string;
}

const PropertyDisplay: FunctionComponent<IPropertyDisplayProps> = ({ icon, title, children }) => (
    <div className="PropertyDisplay">
        <div className="icon-container" title={title}>
            {icon}
        </div>
        <div className="content">
            <div className="title">
                {title}
            </div>
            {children}
        </div>
    </div>
);

export default PropertyDisplay;