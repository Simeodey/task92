import classNames from "classnames";
import { formatCurrency } from "./utils";
import Card from "./Card";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render({type,price}) {
    const template = `
<div class="notification type-${type} ${classNames({"is-danger": type === Card.types.HAWAIIAN,})}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;
    this.container.innerHTML = template;
   // this.container.querySelector(".delete").addEventListener("click",()=>{console.log("Delete button clicked")});
    document.querySelector(".notifications").appendChild(this.container);
    this.container.querySelector(".delete").addEventListener("click",()=>{console.log("Delete button clicked"); this.empty();});
  }
  empty(){
    this.container.innerHTML = "";
  }
}