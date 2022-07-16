import React from 'react'
import "./Program.css"

import ArrowJoin from '../../assets/rightArrow.png'
import Dumbell from '../../assets/dumbell.svg'
import Running from '../../assets/runing.svg'
import Flame from '../../assets/flame.svg'
import HeartHealth from '../../assets/heartHealth.svg'

const Program = () => {
  return (
    <div className='program'>

        {/* Program Headers */}
        <div className="program-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>

        {/* Program Categories */}
        <div className="program-categories">
            <div className="program-category">
                <img src={Dumbell} />
                <span>Strength Training</span>
                <span>In this program, you are trained to improve your strength through many exercises.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={ArrowJoin} alt="" />
                </div>
            </div>
            <div className="program-category">
                <img src={Running} />
                <span>Cardio Training</span>
                <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={ArrowJoin} alt="" />
                </div>
            </div>
            <div className="program-category">
                <img src={Flame} />
                <span>Fat Burning</span>
                <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={ArrowJoin} alt="" />
                </div>
            </div>
            <div className="program-category">
                <img src={HeartHealth} />
                <span>Health Fitness</span>
                <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={ArrowJoin} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program