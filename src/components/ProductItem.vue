<template>
    <div class="col-md-4 mb-3">
      <div class="card">
        <img :src="product.image" alt="image" class="card-img-top" height="300">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusamus corporis officia?</p>
            <p>
                <span class="badge bg-danger">
                   ${{product.price}}
                </span>
            </p>
            <button class="btn btn-primary"
            @click="data.addToCart(product)">
                <i class="bi bi-cart-check">
                    Add to cart
                </i>
            </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import {useCartStore} from '../stores/useCartStore'


const props = defineProps({
    product:{
        type : Object,
        required: true
    }
})

const data = useCartStore();

</script>

