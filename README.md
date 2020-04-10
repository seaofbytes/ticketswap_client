
# Frontend client for the Ticketswap clone project

## Installation
- clone the project : git clone https://github.com/seaofbytes/ticketswap_client
- install dependencies with npm / yarn install
- npm / yarn start

Ticketswap clone is a website that was created in 4 days as a final assignment from Codaisseur Coding Academy. Users can register accounts, create / edit new events and tickets and post comments.
User can also see each ticket's risk factor ( see below on how it is calculated ).



# Backend for the client
 [Backend](https://github.com/seaofbytes/ticketswap_server)


## The frontend for the webshop is built with: 
- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux - Thunk](https://github.com/reduxjs/redux-thunk)
- [Superagent](https://www.npmjs.com/package/superagent)
- [React - Stripe](https://stripe.com/docs/stripe-js/react)   
- [JWT Decode](https://github.com/auth0/jwt-decode) 
- [Bootstrap](https://getbootstrap.com/)

## Risk algorithm calculation rules

* if the ticket is the only ticket of the author, add 10%
* if the ticket price is lower than the average ticket price for that event, that's a risk
	* if a ticket is X% cheaper than the average price, add X% to the risk 
	* if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
* if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
* if there are >3 comments on the ticket, add 5% to the risk
The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.



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


## App Showcase

## Login Page
<img src="https://imgshare.io/images/2020/04/10/ts-login.png"  width="800px" height="570px"/>

## Event List Page
<img src="https://imgshare.io/images/2020/04/10/events-page.png"  width="800px" height="570px"/>

## Event Detail Page 
<img src="https://imgshare.io/images/2020/04/10/event-detail.png" width="800px" height="570px"/>

## Ticket Detail Page 
<img src="https://imgshare.io/images/2020/04/10/ticket-detail.png" width="800px" height="570px"/>




