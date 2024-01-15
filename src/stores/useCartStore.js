import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";

const toast = useToast();
export const useCartStore = defineStore('cart',{
    state : ()=>({
        products: [
           {
             id:1,
             name: 'Iphone 14',
             price: 800,
             image: 'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphones-7479304_1280.jpg'
            },
           {
             id:2,
             name: 'Samsung s20',
             price: 1200,
             image: 'https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063762_1280.jpg'
            },
           {
             id:3,
             name: 'TV LG ',
             price: 1800,
             image: 'https://cdn.pixabay.com/photo/2017/04/07/12/58/lion-2210947_1280.jpg'
            },
           {
             id:4,
             name: 'Oppo 14',
             price: 1000,
             image: 'https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg'
            },
           {
             id:5,
             name: 'Coffe Maker',
             price: 2000,
             image: 'https://media.istockphoto.com/id/477005966/photo/the-coffee-machine.jpg?s=1024x1024&w=is&k=20&c=yqCVrb92cYmdMBd_x8gn2O2XspfZoO1urqBxQASjKQ0='
            },
           {
             id:6,
             name: 'Iron ',
             price: 300,
             image: 'https://cdn.pixabay.com/photo/2014/07/27/17/29/ironing-403074_1280.jpg'
            },

        ],
        cartItems: []
    }),
    getters:{
      countCartItems(state){
        return state.cartItems.length
      }
    },
    actions:{
      addToCart(item){
        let index = this.cartItems.findIndex(product => product.id === item.id)
        if(index !== -1){
          this.cartItems[index].quantity += 1;
          toast.success("Your item has been updated", {
            timeout: 2000
          });
        }
        else{
          item.quantity =1
          this.cartItems.push(item)
          toast.success("Your item has been saved", {
            timeout: 2000
          });
        }
      },
      decrementQuantity(item){
        let index = this.cartItems.findIndex(product => product.id === item.id)
        if(index !== -1){
          this.cartItems[index].quantity -= 1;
          if( this.cartItems[index].quantity === 0){
            this.cartItems.pop(item)
            // this.cartItems = this.cartItems.filter(product => product.id !== item.id)
          }
          toast.success("Your item has been updated", {
            timeout: 2000
          });
        }
      },
      incrementQuantity(item){
        let index = this.cartItems.findIndex(product => product.id === item.id)
        if(index !== -1){
          this.cartItems[index].quantity += 1;

          toast.success("Your item has been updated", {
            timeout: 2000
          });
        }
      },
      removeFromCart(item){
      //  this.cartItems = this.cartItems.filter(product => product.id !== item.id)
       this.cartItems.pop(item)
        toast.success("Your item has been removed", {
          timeout: 2000
        });
      }
    }
}
)