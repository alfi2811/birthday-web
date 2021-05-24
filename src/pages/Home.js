import React from 'react'
import { useSelector } from 'react-redux'
import pic from '../assets/images/foto_2.png'
import name from '../assets/images/name.png'
import star from '../assets/images/Star.png'
const Home = () => {
    const posts = useSelector(state => state?.main?.posts)
    console.log(posts)
    return (
        <div className="home-container">
            {/* {
                posts && posts.map((data) => (
                    <p>{data.title}</p>
                ))                
            } */}            
            <div className="ucapan">
                <h2>26th May 2021</h2>
                <div>      
                    <div className="text">
                        <img src={star} alt="" /> 
                        <p>Panjang Umur</p>
                    </div>          
                    <div className="text">
                        <img src={star} alt="" />                         
                        <p>Selalu Sehat</p>
                    </div>          
                    <div className="text">
                        <img src={star} alt="" />                                                 
                        <p>Jadi Kebanggan Orang Tua</p>
                    </div>          
                </div>
            </div>
            <div className="picture">
                <img src={pic} alt="" />
                <img src={name} alt="" />                
            </div>
            <div className="doa">
                <h2>20th Years Old</h2>
                <p>Selamat ulang tahun untuk satu-satunya seseorang yang terbaik yang pernah aku temui. Semoga tahun ini menjadi lebih indah dan selalu berkah untuk kamu <br />- Bagas Tri Wibowo</p>
            </div>
        </div>
    )
}

export default Home
