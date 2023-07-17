
import Banner from './Banner';
import CategoryTabs from './CategoryTabs';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';
import Sponsored from './Dials';
import Us from './Us';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from './Hooks/useTitle';
import Dials from './Dials';


const Main = () => {
    const [allWatches,setWatches]=useState([])
    useTitle('Home')
    useEffect(()=>{
        fetch('https://wristify-server.vercel.app/allwatches')
        .then(res=>res.json())
        .then(data=>setWatches(data))
    },[])
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <Gallery allWatches={allWatches}></Gallery>
            <Us></Us>
            <CategoryTabs allWatches={allWatches}></CategoryTabs>
            <Dials/>
        </div>
    );
};

export default Main;