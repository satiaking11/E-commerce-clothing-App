import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ISmqDJfe0GZYVEi6XMPOzXXM5SzfrdiobcTExiCPJu9dUlNXXFtEkg2byG32SXsmzCMSOMS4F1mn0WYOlfCXX4L00M1ydxLD2';

    const onToken = token => {
        console.log(token);
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}    //pass to backend
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;