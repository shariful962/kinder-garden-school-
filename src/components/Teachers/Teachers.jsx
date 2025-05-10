'use client'
import React, { useEffect, useState } from 'react';
import SingleTeacher from '../SingleTeacher/SingleTeacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(()=>{
        fetch('/teachers.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    console.log(teachers)
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                teachers.map((teacher)=>(
                    <SingleTeacher key={teacher.id} teacher = {teacher} ></SingleTeacher>
                ))
            }
          </div>
        </div>
    );
};

export default Teachers;