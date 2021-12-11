import React from 'react';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <header className='row block center' >
            <div> 
                <a href="#">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    
                    Cart{' '}

                    {countCartItems? (
                        <button class="button button5">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a> {' '}
            </div>
        </header>
    );
}