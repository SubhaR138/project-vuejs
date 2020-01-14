//databiniding
var data={messagen:''}
new Vue({
  el:'#databindn',
  data:data
})
var data={message:''}
new Vue({
  el:'#databind-name',
  data:data
})
//Lists
var app = new Vue({
      el: '#recipe-add',
      data: {
             recipes: []
            }
});
document.querySelector('#button').addEventListener('click', () => {
let recipe = document.querySelector('#input1');
app.recipes.push(recipe.value);
recipe.value = '';
});
//class binding

var hover1 = new Vue({
    el: '#Indian-menu',
    data: {
        title: 'Indian Recipes'
    }
});
Vue.component('task-slot',{
    template:'<li><slot></slot></li>'
});
new Vue({
    el:'#recipe-tasks'
});

var hover2= new Vue({
    el: '#Chinese-menu',
    data: {
        title: 'Chinese Recipes'
    }
});
Vue.component('task-slot',{
    template:'<li><slot></slot></li>'
});
new Vue({
    el:'#recipe-task1'
});
// Vue.component('modaL', {

// 	template: `
// 				<!-- Modal -->
// 				<div class="modal show modal-background" role="dialog">
// 					<div class="modal-dialog">
// 						<!-- Modal content-->
// 						<div class="modal-content">
// 							<div class="modal-header">
// 								<button class="close" type="button" data-dismiss="modal" @click="$emit('close')">&times;</button>
// 								<h4>Register Form</h4>
// 							</div>
// 							<slot></slot>
							
// 						</div>
						
// 					</div>
// 				</div>
// 		`
// });
// new Vue({
//     el : '#modal-wrap',
//     data:{
//         showModal:false
//     }
// });
//modal 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//coupon component
window.Event=new class{
    constructor(){
        this.vue=new Vue();
    }
    fire(event,data=null){
        this.vue.$emit(event,data);
    }
    listen(event,callback){
        this.vue.$on(event,callback);
    }
}
Vue.component('coupon',{
    template:`<input placeholder="name" @blur="onCouponApplied">`,
    methods:{
        onCouponApplied(){
            Event.fire('applied');
        }
    }
});
new Vue({
    el : '#comm-wrap',
    data:{
        couponApplied:false,
        
    },
    created(){
        Event.listen('applied',() => alert('Registered successfully'));
       
    }
});
Vue.component('tabs', {

	template: `
	
				<div>
					<div class="tab-bar">
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item" v-for="tab in tabs" >
								<a class="nav-link" :class="{'nav-link active': tab.isActive }" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
							</li>
						</ul>
					</div>
	
					<div class="tab-content">
						<slot></slot>
					</div>
				</div>
	
	
		`,

	data() {

		return { tabs: [] };
	},

	created() {

		this.tabs = this.$children;
	},

	methods: {

		selectTab(selectedTab) {
			this.tabs.forEach(tab => {

				tab.isActive = (tab.name == selectedTab.name);
				
			});

		}
	}

});
//reverse-text
var app = new Vue({
  el: '#main',
  data: { 
      message: 'Hello'
  }
});

//databinding-feedback
var data={message:''};

new Vue({

	el: '#databind',
	data: data

})

//Image gallery

Vue.component('tab', {

	template: `
					<div v-show="isActive"><slot></slot></div>
		`,

	props: {
		name: { required: true },
		selected: { default: false }
	},

	data() {

		return {
			isActive: false
		};

	},

	mounted() {

		this.isActive = this.selected;
	},

	computed: {

		href() {

			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	}

});


new Vue({

	el: '#Recipe-gallery'

});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous control
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

