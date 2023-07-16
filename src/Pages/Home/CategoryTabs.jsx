import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';
const CategoryTabs = ({ allToys }) => {
    const mathToys = allToys.filter(toy => toy.subcategory === 'Math');
    const geoToys = allToys.filter(toy => toy.subcategory === 'Geography');
    const probToys = allToys.filter(toy => toy.subcategory === 'Problem Solving');
    console.log(geoToys, mathToys, probToys)
    return (
        <div className="flex justify-center text-center mx-5">
            <Tabs>
                <h1 className='font-bold text-4xl py-5'>Categories</h1>
                <p className='max-w-4xl mx-auto'>In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                <TabList className="flex justify-center flex-wrap mt-10">
                    <Tab>Geography</Tab>
                    <Tab>Problem-Solving</Tab>
                    <Tab>Math and Counting</Tab>
                </TabList>

                <TabPanel>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {geoToys.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {probToys.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                        {mathToys.slice(0,4).map(item => <TabCard key={item._id} toy={item}></TabCard>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;