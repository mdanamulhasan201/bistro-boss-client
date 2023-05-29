import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();


    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop </title>
            </Helmet>
            <Cover img={orderImg} title={'Order Food'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='font-bold mt-20 text-center mb-2'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;