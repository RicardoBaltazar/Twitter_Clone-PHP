import React from 'react'
import './banner.css'

const photoPerfil = require('../../assets/foto-perfil.png')

export default function Banner() {
    return (
        <>
            <div className='banner'>
                <img src={photoPerfil} alt="foto de perfil" className='perfil-photo'/>
            </div>
        </>
    )
}