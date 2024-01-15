<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.cartItems" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>
                                    <img :src="item.image" width="100" height="100" class="img-fluid rounded" alt="image of product">
                                </td>
                                <td>{{item.name}}</td>
                                <td>
                                    <i @click="data.incrementQuantity(item)"
                                    class="bi bi-caret-up"></i>
                                    {{item.quantity}}
                                    <i @click="data.decrementQuantity(item)"
                                     class="bi bi-caret-down"></i>
                                    </td>
                                <td>{{item.price}}</td>
                                <td>{{item.price * item.quantity}}</td>
                                <td>
                                    <i @click="data.removeFromCart(item)"
                                     class="bi bi-cart-x text-danger fw-bold"></i>
                                </td>
                            </tr>
                            <tr>
                                <th class="text-center " colspan="3">Total</th>
                                <td class="text-center " colspan="3">
                                    <span class="badge  text-bg-danger ">
                                        ${{data.cartItems.reduce((acc,item)=> acc += item.price 
                                        * item.quantity, 0)}}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCartStore} from '../stores/useCartStore'

const data = useCartStore();
</script>

<style>
 i{
    cursor: pointer;
 }
</style>