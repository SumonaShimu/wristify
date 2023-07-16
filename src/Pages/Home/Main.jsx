
import Banner from './Banner';
import CategoryTabs from './CategoryTabs';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';
import Sponsored from './Sponsored';
import Us from './Us';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from './Hooks/useTitle';


const Main = () => {
    const [allToys,setToys]=useState([])
    useTitle('Home')
    useEffect(()=>{
        fetch('https://wristify-server.vercel.app/allwatches')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <Gallery allToys={allToys}></Gallery>
            <Us></Us>
            <CategoryTabs allToys={allToys}></CategoryTabs>
            <Sponsored></Sponsored>
        </div>
    );
};

export default Main;