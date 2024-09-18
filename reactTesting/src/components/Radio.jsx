import Card from './Card.jsx'
import '../css/Radio.css'
import { useState } from 'react'

function Radio() {
    let [selectedPlan, selectedPlanChange] = useState('free');

    function selectedPlanChangeHandler(event) {
        selectedPlanChange(event.target.value);
    }

    return(
        <>
            <section className='radioContainer'>
                <input onChange={selectedPlanChangeHandler} checked={selectedPlan === 'free'} type="radio" id="planFree" name="choosePlan" value="free" />
                <label for="planFree">
                    <Card checked={selectedPlan === 'free' ? 'checked' : ''} title="Free" price="0" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quibusdam quisquam asperiores ut laborum, voluptatem veniam reiciendis ducimus dignissimos, sequi eligendi voluptas ipsa."/>
                </label>
                <input onChange={selectedPlanChangeHandler} checked={selectedPlan === 'vip'} type="radio" id="planVIP" name="choosePlan" value="vip" />
                <label for="planVIP">
                    <Card checked={selectedPlan === 'vip' ? 'checked' : ''} title="VIP" price="10" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quibusdam quisquam asperiores ut laborum, voluptatem veniam reiciendis ducimus dignissimos, sequi eligendi voluptas ipsa."/>
                </label>
                <input onChange={selectedPlanChangeHandler} checked={selectedPlan === 'premium'} type="radio" id="planPremium" name="choosePlan" value="premium" />
                <label for="planPremium">
                    <Card checked={selectedPlan === 'premium' ? 'checked' : ''} title="Premium" price="25" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quibusdam quisquam asperiores ut laborum, voluptatem veniam reiciendis ducimus dignissimos, sequi eligendi voluptas ipsa."/>
                </label>
            </section>
            <p>Selected plan: {selectedPlan}</p>
        </>
    );
}

export default Radio