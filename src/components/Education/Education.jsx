import React from 'react'
import './Education.css'
import { RiGraduationCapFill } from 'react-icons/ri'
import { BsSuitcaseLgFill } from 'react-icons/bs'

const Education = () => {

    const Card= (props) =>{
        return(
            <div className='card min-h-5 design'>
                <div className='flex gap-1 border-btm p-bottom-1'>
                    <div className='icon-container green-inverse'>
                        {props.icon}
                    </div>
                    <h3>{props.title}</h3>
                </div>

                <div className='mt-2'>
                    {props.item.map(education=>{
                        return(
                            <div className='flex between mt-2' key={education.id}>
                                <div>
                                    <span className="sub-text">{education.institute}</span>
                                    <p>{education.subtitle}</p>
                                </div>
                                <div className='list'>{education.date}</div>
                            </div>
                        )
                    })}

                </div>

            </div>
        )
    }

  return (
    <section>
        <div className="wrapper p-block-9 border-btm">
            <div className='text-center'>
                <span className="sub-text overlay-text middle" datatype='Education & Work'>Education & Work</span>
                <h2>
                    My <span className="green-text">Academic &<br /> Professional</span> Journey
                </h2>
            </div>

            <div className='mt-5 flex gap-5 '>
                <Card item={education} title="Education" icon={<RiGraduationCapFill />}/>
                <Card item={workExperience} title="Work Experience" icon={<BsSuitcaseLgFill />}/>
            </div>

        </div>
    </section>
  )
}

export default Education




const education=[
    {
        id: 1,
        institute: 'IMSEC Insitute',
        subtitle: 'BTECH (IT)',
        date : '2022-2026'
    },
    {
        id: 2,
        institute: 'Royal School',
        subtitle: 'Intermidiate',
        date : '2020-2021'
    },
    {
        id: 3,
        institute: 'R.S.M School',
        subtitle: 'High School',
        date : '2018-2019'
    },
]

const workExperience=[
    {
        id:1,
        institute: ' No Work Experience',
        date : 'Fresher'
        
    }
]