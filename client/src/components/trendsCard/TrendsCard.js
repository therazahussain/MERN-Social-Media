import React from 'react'
import "./TrendsCard.css"
import {TrendData} from "../../Data/TrendsData.js"

const TrendsCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

        </div>
    )
}

export default TrendsCard