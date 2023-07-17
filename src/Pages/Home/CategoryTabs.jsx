import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';
const CategoryTabs = ({ allWatches }) => {
    const luxury = allWatches.filter(toy => toy.subcategory === 'luxury');
    const sports = allWatches.filter(toy => toy.subcategory === 'sports');
    const ladies = allWatches.filter(toy => toy.subcategory === 'ladies');
console.log(allWatches)
    return (
        <div className="flex justify-center text-center mx-5">
            <Tabs>
                <h1 className='font-bold text-4xl py-5'>Categories</h1>
                <p className='max-w-4xl mx-auto text-white'>In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                <TabList className="flex justify-center flex-wrap mt-10 text-white/70">
                    <Tab>Luxury</Tab>
                    <Tab>Sports</Tab>
                    <Tab>Ladies Watch</Tab>
                </TabList>

                <TabPanel>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {luxury.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {sports.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {ladies.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;