const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//console.log(document.querySelectorAll('#status'))

const status1 = document.querySelector('#book1 .status')
const reserve1 = document.querySelector('#book1 .reserve')
const checkout1 = document.querySelector('#book1 .checkout')
const checkin1 = document.querySelector('#book1 .checkin')
style = document.querySelector('#book1 color')
status1.style.color = STATUS_MAP.overdue.color

checkin1.style.color = ""
status1.style.color = STATUS_MAP.overdue.color
reserve1.disabled = !STATUS_MAP.overdue.canReserve
checkout1.disabled = !STATUS_MAP.overdue.canCheckout
checkin1.disabled = !STATUS_MAP.overdue.canCheckIn 

const status2 = document.querySelector('#book2 .status')
const reserve2 = document.querySelector('#book2 .reserve')
const checkout2 = document.querySelector('#book2 .checkout')
const checkin2 = document.querySelector('#book2 .checkin')

checkin2.style.color = ""
status2.style.color = STATUS_MAP.reserved.color
reserve2.disabled = !STATUS_MAP.reserved.canReserve
checkout2.disabled = !STATUS_MAP.reserved.canCheckout
checkin2.disabled = !STATUS_MAP.reserved.canCheckIn 

const status3 = document.querySelector('#book3 .status')
const reserve3 = document.querySelector('#book3 .reserve')
const checkout3 = document.querySelector('#book3 .checkout')
const checkin3 = document.querySelector('#book3 .checkin')

checkin3.style.color = ""
status3.style.color = STATUS_MAP.shelf.color
reserve3.disabled = !STATUS_MAP.shelf.canReserve
checkout3.disabled = !STATUS_MAP.shelf.canCheckout
checkin3.disabled = !STATUS_MAP.shelf.canCheckIn 