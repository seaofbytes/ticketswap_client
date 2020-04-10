
# Frontend client for the Ticketswap clone project

## Installation
- clone the project : git clone https://github.com/seaofbytes/gamefront_client
- install dependencies with npm / yarn install
- npm / yarn start

Ticketswap clone is a website that was created in 4 days as a final assignment from Codaisseur Coding Academy. Users can register accounts, create / edit new events and tickets and post comments.
User can also see each ticket's risk factor ( see below on how it is calculated ).

## User stories
* As a customer I want to see max. 9 events on a page and be able to click 'next' to see more pages of events if there are more
* As a customer I only want to see events that are not finished yet
* As a customer I want to view a list of tickets when I click on an event
* As a customer I want to view ticket details when I click on a ticket in the ticket list
* As a customer I want to see what the fraud-risk is for a specific ticket
* As a customer I want to be able to login, or sign up if I don't have an account yet
* As a logged in customer I want to add a ticket (for a specific event) that shows up on the event page with a title, picture, price and description
* As an author of the ticket I want to be able to edit a ticket's description, price and picture (other logged in customers cannot do this! only the user that created the ticket can edit it)
* As a logged in customer I want to be able to create events with a name, picture (logo), date and description
* As a customer I can see some color (red/yellow/green) indicating the fraud risk of a ticket for all tickets in the all tickets list


# Backend for the client
 [Backend](https://github.com/seaofbytes/ticketswap_server)


## The frontend for the webshop is built with: 
- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux - Thunk](https://github.com/reduxjs/redux-thunk)
- [Superagent](https://www.npmjs.com/package/superagent)
- [React - Stripe](https://stripe.com/docs/stripe-js/react)   
- [JWT Decode](https://github.com/auth0/jwt-decode) 


## App Showcase

## Products Page
<img src="https://media.giphy.com/media/WUxzJc2axR74BU80UY/giphy.gif"  width="800px" height="570px"/>

## Cart
<img src="https://media.giphy.com/media/iILsV9hUa4iJmUuzZi/giphy.gif"  width="800px" height="570px"/>

## Order Payment
<img src="https://media.giphy.com/media/YOdVUMwxhTEqM05URE/giphy.gif" width="800px" height="570px"/>






