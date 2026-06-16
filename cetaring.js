let selectedEvent = '';
let selectedSubEvent = '';
let selectedVegNonVeg = '';
let selectedCourse = '';

// Sample food items array (KEEP YOUR EXISTING ITEMS ARRAY HERE)
const items = [
                // Wedding - Mahendi 
                //veg starter
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'masala bharkerwadi', price: 140, img: 'veg starter/masala bhakerwadi.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Starter' },

                //non-veg starter
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Cheez roll', price: 140, img: 'nonveg starter/cheez roll.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Fryer', price: 140, img: 'nonveg starter/chicken fryer.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Starter' },

          
                //meal-veg
                { name: 'Grilled Paneer', price: 140, img: 'veg-meals/grilled-paneer.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Malai Paneer Tikka', price: 140, img: 'veg-meals/malai-paneer-tikka-.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer tikka Curry', price: 140, img: 'veg-meals/panner-tikka-curry.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Palak Paneer', price: 140, img: 'veg-meals/palak paneer.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },
                { name: 'Pasta Onion', price: 140, img: 'veg-meals/pasta-onion.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Main Meal' },

                //non-veg meal
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khichda', price: 130, img: 'meals/khichda.jpg',              event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dalcha Khana', price: 130, img: 'meals/dalcha khana.jpg',    event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Mandi', price: 130, img: 'meals/mandi.jpg',                  event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Special Thali', price: 130, img: 'meals/non-veg thali.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Showarma Plate', price: 130, img: 'meals/lamb-showarma.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Main Meal' },

                //Desserts veg
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'cream cookies', price: 130, img: 'dessert/cream cookies.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img: 'dessert/Oreo-Ice-Cream.png', event: 'Wedding', subEvent: 'Mahendi', type: 'Veg', course: 'Desserts' },
                
                //dessert non-veg
                           
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'cream cookies', price: 130, img: 'dessert/cream cookies.jpg', event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Wedding', subEvent: 'Mahendi', type: 'Non-Veg', course: 'Desserts' },

                // Wedding - Haldi
                //starter veg
                { name: 'masala bharkerwadi', price: 140, img: 'veg starter/masala bhakerwadi.jpg',   event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',                    event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',              event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',                      event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',                          event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',                    event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',                      event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',            event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Starter' },
                
                //starter non-veg
                { name: 'Cheez roll', price: 140, img: 'nonveg starter/cheez roll.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Fryer', price: 140, img: 'nonveg starter/chicken fryer.jpg',     event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',     event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',    event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Haldi', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',   event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Starter' },
                
                //main meal veg
                

                { name: 'french fries', price: 140, img: 'veg-meals/frence-fries.jpg',               event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },   
                { name: 'Grilled Paneer', price: 140, img: 'veg-meals/grilled-paneer.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Malai Paneer Tikka', price: 140, img: 'veg-meals/malai-paneer-tikka-.webp', event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer tikka Curry', price: 140, img: 'veg-meals/panner-tikka-curry.jpg',   event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Palak Paneer', price: 140, img: 'veg-meals/palak paneer.jpg',               event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg',             event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg',                event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg',                     event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Main Meal' },
                
                //main-meal non-veg

                { name: 'Mandi', price: 130, img: 'meals/mandi.jpg',                  event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Special Thali', price: 130, img: 'meals/non-veg thali.webp', event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
       { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
    { name: 'Spicy Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp', event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khichda', price: 130, img: 'meals/khichda.jpg',              event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dalcha Khana', price: 130, img: 'meals/dalcha khana.jpg',    event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Main Meal' },
                
                //Dessert veg
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'cream cookies', price: 130, img: 'dessert/cream cookies.jpg', event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Wedding', subEvent: 'Haldi', type: 'Veg', course: 'Desserts' },

                //dessert Non-veg
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'cream cookies', price: 130, img: 'dessert/cream cookies.jpg', event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Wedding', subEvent: 'Haldi', type: 'Non-Veg', course: 'Desserts' },

                // Wedding - Wedding 

                //starter veg
                { name: 'papad plate', price: 200, img: 'dessert/papad plt.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Masala Papad', price: 200, img: 'dessert/masala ppd.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Papad Cup masala', price: 200, img: 'veg starter/ppd cup.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },

                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
       { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',        event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                { name: 'Manchowrain', price: 90, img: 'veg-meals/manchowrian.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Starter' },
                
                //non-veg starter-wedding
                { name: 'Mutton shahi Kabab', price: 140, img: 'nonveg starter/chiken popcorn.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Mutton Tikki', price: 140, img: 'nonveg starter/chiken popcorn.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Bhuna Mutton', price: 140, img: 'nonveg starter/chiken popcorn.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Mutton lollipop', price: 140, img: 'nonveg starter/chiken popcorn.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },

                { name: 'Cheez roll', price: 140, img: 'nonveg starter/cheez roll.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Fryer', price: 140, img: 'nonveg starter/chicken fryer.jpg',     event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',     event: 'Wedding', subEvent:'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',    event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Wedding', subEvent: 'Wedding', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Malai tikka', price: 140, img: 'nonveg starter/Chicken-Malai-Tikka.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Wings', price: 140, img: 'nonveg starter/Crispy-Baked-Chicken-Wings.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Popcorn', price: 140, img: 'nonveg starter/chiken popcorn.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },
                { name: 'Butter Garlic Chicken', price: 140, img: 'nonveg starter/Butter garlic chicken.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Starter' },

                //veg meal-wedding
                { name: 'Shahkari special plate', price: 140, img: 'veg-meals/shahkari.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Pav Bhaji', price: 140, img: 'veg starter/pav-bhaji cheez.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Palak paneer Khurma', price: 140, img: 'veg-meals/palak paneer khurma.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Began masala', price: 140, img: 'veg-meals/began sabji.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
 
                { name: 'french fries', price: 140, img: 'veg-meals/frence-fries.jpg',               event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },   
                { name: 'Grilled Paneer', price: 140, img: 'veg-meals/grilled-paneer.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Malai Paneer Tikka', price: 140, img: 'veg-meals/malai-paneer-tikka-.webp', event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer tikka Curry', price: 140, img: 'veg-meals/panner-tikka-curry.jpg',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Palak Paneer', price: 140, img: 'veg-meals/palak paneer.jpg',               event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg',             event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg',                event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg',                     event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Burger Chicken', price: 140, img: 'veg-meals/burger_chicken.jpg',           event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Maggi Soup', price: 140, img: 'veg-meals/maggi-soup.jpg',                   event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Manchow Soup', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Pao Bhaji Cheez', price: 140, img: 'veg-meals/pav-bhaji cheez.jpg',                             event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
              
                //Non-veg meal-Wedding
                { name: 'Mandi', price: 130, img: 'meals/mandi.jpg',                  event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Special Thali', price: 130, img: 'meals/non-veg thali.webp', event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
       { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
    { name: 'Spicy Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp', event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khichda', price: 130, img: 'meals/khichda.jpg',              event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dalcha Khana', price: 130, img: 'meals/dalcha khana.jpg',    event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Main Meal' },

                //Dessert - veg Wedding
                 {name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts'} ,
                 {name: 'Choco Cake', price: 130, img: 'dessert/choco cake.jpg', event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 130, img: 'dessert/chpcobar ice.jpg',       event: 'Wedding', subEvent: 'Wedding', type:'Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img: 'dessert/gulab-jamun thandai.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },

                 {name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                 {name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Wedding', subEvent: 'Wedding', type: 'Veg', course: 'Desserts' },

                //dessert Non-veg
                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 130, img: 'dessert/chpcobar ice.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img: 'dessert/gulab-jamun thandai.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
    
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Choco Cake', price: 130, img: 'dessert/choco cake.jpg', event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Wedding', subEvent: 'Wedding', type: 'Non-Veg', course: 'Desserts' },


                // Wedding - Reception

                //Reception- starter veg
                { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',        event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Manchowrain', price: 90, img: 'veg-meals/manchowrian.jpg',       event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Starter' },

                //reception nonveg starter
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Wedding', subEvent: 'Reception', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',      event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Malai tikka', price: 140, img: 'nonveg starter/Chicken-Malai-Tikka.jpg', event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Wings', price: 140, img: 'nonveg starter/Crispy-Baked-Chicken-Wings.jpg',event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Popcorn', price: 140, img: 'nonveg starter/chiken popcorn.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
            { name: 'Butter Garlic Chicken', price: 140, img:'nonveg starter/Butter garlic chicken.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Mutton shahi Kabab', price: 140, img: 'nonveg starter/chiken popcorn.jpg',       event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Mutton Tikki', price: 140, img: 'nonveg starter/chiken popcorn.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Bhuna Mutton', price: 140, img: 'nonveg starter/chiken popcorn.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Mutton lollipop', price: 140, img: 'nonveg starter/chiken popcorn.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Cheez roll', price: 140, img: 'nonveg starter/cheez roll.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Fryer', price: 140, img: 'nonveg starter/chicken fryer.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',            event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',            event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Starter' },

                //recep meal veg
                { name: 'Palak Paneer', price: 140, img: 'veg-meals/palak paneer.jpg',               event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Butter Paneer', price: 140, img: 'veg-meals/butter paneer.jpg',               event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Egg Khurmar', price: 140, img: 'veg-meals/egg fry.jpg',               event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Shahkari Special Plate', price: 140, img: 'veg-meals/shahkari.jpg',               event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
  
                { name: 'Aalu Curry', price: 140, img: 'veg-meals/aalo curry.jpg',               event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg',                event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg',                     event:'Wedding',  subEvent: 'Reception',  type: 'Veg', course: 'Main Meal'},
                { name: 'Burger Chicken', price: 140, img: 'veg-meals/burger_chicken.jpg',           event:'Wedding',  subEvent: 'Reception',  type: 'Veg', course: 'Main Meal'},
                { name: 'Maggi Soup', price: 140, img: 'veg-meals/maggi-soup.jpg',                   event:'Wedding',  subEvent: 'Reception',  type: 'Veg', course: 'Main Meal'},
                { name: 'Manchow Soup', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Reception',  type: 'Veg', course: 'Main Meal'},
                { name: 'Grilled Paneer', price: 140, img: 'veg-meals/grilled-paneer.jpg',                             event:'Wedding',  subEvent: 'Reception',  type: 'Veg', course: 'Main Meal'},                { name: 'Shahkari special plate', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Pao Bhaji', price: 140, img: 'veg-meals/pao bhaji.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Palak paneer Khurma', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Began masala', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},


                //recep meal nonveg
                
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khichda', price: 130, img: 'meals/khichda.jpg',              event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dalcha Khana', price: 130, img: 'meals/dalcha khana.jpg',    event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Mandi', price: 130, img: 'meals/mandi.jpg',                  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Special Thali', price: 130, img: 'meals/non-veg thali.webp', event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
       { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
    { name: 'Spicy Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp', event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Main Meal' },
             
    //Rec dessert veg
                { name: 'Elegant Rose Cup', price: 140, img: 'dessert/elegant rose cup.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Assorted pastry', price: 140, img: 'dessert/assorted pstry.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Jiuce ', price: 140, img: 'dessert/jiuce.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'mango cup ', price: 140, img: 'dessert/mango cup.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Orange Jiuce ', price: 140, img: 'dessert/org juice.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Pinapple Juice', price: 140, img: 'dessert/pinple jiuce.jpg',     event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                 {name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts'} ,
                 {name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',       event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                 {name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                 {name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },
                 {name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Veg', course: 'Desserts' },

            //rec dessert no veg
                 {name: 'custard', price: 130, img: 'dessert/custard.jpg',                         event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 130, img: 'dessert/chpcobar ice.jpg',                  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 140, img: 'dessert/elegant rose cup.jpg',       event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Assorted pastry', price: 140, img: 'dessert/assorted pstry.jpg',          event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jiuce ', price: 140, img: 'dessert/jiuce.jpg',                            event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'mango cup ', price: 140, img: 'dessert/mango cup.jpg',                    event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Orange Jiuce ', price: 140, img: 'dessert/org juice.jpg',                 event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Pinapple Juice', price: 140, img: 'dessert/pinple jiuce.jpg',             event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',                   event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts'} ,
                {name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                             event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                {name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',                       event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',                       event: 'Wedding', subEvent: 'Reception', type: 'Non-Veg', course: 'Desserts' },

                // Corporate
                 //starter veg
       { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Masala Papad', price: 200, img: 'dessert/masala ppd.jpg',    event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Papad Cup masala', price: 200, img: 'veg starter/ppd cup.jpg',   event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Corporate', subEvent: '', type: 'Veg', course: 'Starter' },

                //cor starter non-veg
                { name: 'Cheez roll', price: 140, img: 'nonveg starter/cheez roll.jpg',           event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Fryer', price: 140, img: 'nonveg starter/chicken fryer.jpg',     event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',     event:'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',    event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp', event: 'Corporate', subEvent: '', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',   event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                        event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Corporate', subEvent: '', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',      event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Soup', price: 140, img: 'veg-meals/soup.jpg',      event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Starter' },

                //Cor Meal Veg
                { name: 'Veg Lollopop', price: 140, img: 'veg starter/veg lollipop.jpg',     event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Puri Bhaji', price: 140, img: 'veg-meals/puri bhaji.jpg',                     event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Paneer Angara', price: 140, img: 'veg starter/paneer angara.jpg',        event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Began masala', price: 140, img: 'veg-meals/began sabji.jpg',               event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'french fries', price: 140, img: 'veg-meals/frence-fries.jpg',               event:'Corporate', subEvent: '', type: 'Veg', course: 'Main Meal' },   
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg',             event:'Corporate', subEvent: '', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg',                event:'Corporate', subEvent: '', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg',                     event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Burger Chicken', price: 140, img: 'veg-meals/burger_chicken.jpg',           event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Maggi Soup', price: 140, img: 'veg-meals/maggi-soup.jpg',                   event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Manchow Soup', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},
                { name: 'Pao Bhaji Cheez', price: 140, img: 'veg starter/pav-bhaji cheez.jpg',          event:'Corporate',  subEvent: '',  type: 'Veg', course: 'Main Meal'},

                //Cor Meal non-veg
                {name:'Fish Khurma',price:90, img:'meals/fish khurma.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Non-Veg', course:'Main Meal'},
                 {name:'Showarma',price:150, img:'meals/showarma.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Non-Veg',course:'Main Meal'},
                 {name:'Sandwich',price:150, img:'meals/sandwich.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Non-Veg',course:'Main Meal'},

                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
       { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
    { name: 'Spicy Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp', event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Main Meal' },
                 {name:' Meat Showarma',price:150, img:'meals/meat-showarma.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Non-Veg',course:'Main Meal'},

                //Cor Dessert veg
                 {name:'Coffee',price:150, img:'dessert/coffe.webp'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Tea',price:150, img:'dessert/tea.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Cold Coffee',price:150, img:'dessert/cold cof.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Mint Tea',price:150, img:'dessert/mint tea.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Green Tea',price:150, img:'dessert/Green-tea.avif'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Juice',price:150, img:'dessert/jiuce.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Lassi',price:150, img:'dessert/lassi.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Lemon Tea',price:150, img:'dessert/lemon tea.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Mango Lassi',price:150, img:'dessert/mango lassi.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Mint Lassi',price:150, img:'dessert/mint lassi.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Juice Ice',price:150, img:'dessert/juice ice.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Orange Juice',price:150, img:'dessert/org juice.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Parune Juice',price:150, img:'dessert/parune juice.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Pinapple',price:150, img:'dessert/pinple jiuce.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Ruh-afza',price:150, img:'dessert/roh afza drinks.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'rose drink',price:150, img:'dessert/rose drink.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Rose Drink',price:150, img:'dessert/rose drink.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},
                 {name:'Ice Cream',price:150, img:'dessert/ice-creame.jpg'   ,   event:'Corporate', subEvent:'' ,type:'Veg',course:'Desserts'},

                 //Cor Dessert non-veg
                { name: 'Elegant Rose Cup', price: 140, img: 'dessert/elegant rose cup.jpg',     event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Assorted pastry', price: 140, img: 'dessert/assorted pstry.jpg',        event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jiuce ', price: 140, img: 'dessert/jiuce.jpg',                          event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'mango cup ', price: 140, img: 'dessert/mango cup.jpg',                  event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Orange Jiuce ', price: 140, img: 'dessert/org juice.jpg',               event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Pinapple Juice', price: 140, img: 'dessert/pinple jiuce.jpg',           event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                 {name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',                 event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts'} ,
                 {name: 'custard', price: 130, img: 'dessert/custard.jpg',                       event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',                 event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
            { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg',   event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                 {name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                           event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                 {name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',                     event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },
                 {name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',                     event: 'Corporate', subEvent: '', type: 'Non-Veg', course: 'Desserts' },


                // Parties - Birthday
                //bir starter veg
                { name: 'papad cup', price: 200, img: 'veg starter/ppd cup.jpg',      event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Pani Puri', price: 200, img: 'veg starter/pudina puri.jpg',    event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Papad Cup masala', price: 200, img: 'veg starter/ppd cup.jpg',   event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
       { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',        event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                { name: 'Manchowrain', price: 90, img: 'veg-meals/manchowrian.jpg',       event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Starter' },
                

                //Birth starter nonveg
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',            event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',            event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Birthday', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                                event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Birthday', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',      event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Popcorn', price: 140, img: 'nonveg starter/chiken popcorn.jpg',                       event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Soup', price: 140, img: 'veg-meals/soup.jpg',                       event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Starter' },

                //Bir meal veg
                { name: 'Cake', price: 140, img: 'dessert/bir_cake/bar cake1.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Chocolate Cake', price: 140, img: 'dessert/bir_cake/bar cake2.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Cake', price: 140, img: 'dessert/bir_cake/c1.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Carton Cake', price: 140, img: 'dessert/bir_cake/carton cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Cadbury Cake', price: 140, img: 'dessert/bir_cake/catberry cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Choco Cake', price: 140, img: 'dessert/bir_cake/choco cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Chco Traffle Cake', price: 140, img: 'dessert/bir_cake/choco trffle.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Chocolate Cake', price: 140, img: 'dessert/bir_cake/choco.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Chocolate Cake', price: 140, img: 'dessert/bir_cake/choco2.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Dreamy Cake', price: 140, img: 'dessert/bir_cake/dreamy disgn.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Elegant Cake', price: 140, img: 'dessert/bir_cake/elegant cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Floral Cake', price: 140, img: 'dessert/bir_cake/florall.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Layer Cake', price: 140, img: 'dessert/bir_cake/layr cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Mici Mouse Cake', price: 140, img: 'dessert/bir_cake/mici cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Panda Cake', price: 140, img: 'dessert/bir_cake/panda cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },
                { name: 'Rectangle Cake', price: 140, img: 'dessert/bir_cake/rectangle cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Main Meal' },

                //bir meal non-veg
                { name: 'Rectangle Cake', price: 140, img: 'dessert/bir_cake/rectangle cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Cake', price: 140, img: 'dessert/bir_cake/sky cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Carton Cake', price: 140, img: 'dessert/bir_cake/tom jerry.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: ' Cake', price: 140, img: 'dessert/bir_cake/beut cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: ' Cake', price: 140, img: 'dessert/bir_cake/c cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'layered Cake', price: 140, img: 'dessert/bir_cake/lay cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'layered Cake', price: 140, img: 'dessert/bir_cake/layered cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'multi cake', price: 140, img: 'dessert/bir_cake/layr cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Multi Teir Cake', price: 140, img: 'dessert/bir_cake/multi tier cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Princes cake', price: 140, img: 'dessert/bir_cake/princ cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Pink cake', price: 140, img: 'dessert/bir_cake/pink cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Picture Cake', price: 140, img: 'dessert/bir_cake/pic cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Cake', price: 140, img: 'dessert/cake_1.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Cake', price: 140, img: 'dessert/cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Chocolate Cake', price: 140, img: 'dessert/choco cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Round Cake', price: 140, img: 'dessert/circle_cake.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Creame Cake', price: 140, img: 'dessert/cake_1.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Main Meal' },

                 //bir dessert veg
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,            event:'Parties',  subEvent:'Birthday' , type:'Veg',  course: 'Desserts'},
                 {name:'Rose Drink',price:60, img:'dessert/rose drink.jpg'   ,                     event:'Parties',  subEvent:'Birthday' , type:'Veg',  course: 'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,          event:'Parties',  subEvent:'Birthday' , type:'Veg',  course: 'Desserts'},
                 {name:'Ice Cream',price:80, img:'dessert/ice-creame.jpg'   ,                      event:'Parties',  subEvent:'Birthday' , type:'Veg',  course: 'Desserts'},
                { name: 'Choco Shake', price: 50, img: 'dessert/cho shake.jpg',                    event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 30, img: 'dessert/chpcobar ice.jpg',                   event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Malai Kulfi', price: 50, img:'dessert/malai kulfi.jpg',                   event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 100, img: 'dessert/elegant rose cup.jpg',       event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                {name: 'Kinder Joy', price: 70, img: 'dessert/kinder joy.jpg',                     event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Veg', course: 'Desserts' },

                 //bir dessert Non-veg
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,            event:'Parties',  subEvent:'Birthday' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Rose Drink',price:60, img:'dessert/rose drink.jpg'   ,                     event:'Parties',  subEvent:'Birthday' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,          event:'Parties',  subEvent:'Birthday' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Ice Cream',price:80, img:'dessert/ice-creame.jpg'   ,                      event:'Parties',  subEvent:'Birthday' , type:'Non-Veg',  course: 'Desserts'},
                { name: 'Choco Shake', price: 50, img: 'dessert/cho shake.jpg',                    event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 30, img: 'dessert/chpcobar ice.jpg',                   event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai Kulfi', price: 50, img:'dessert/malai kulfi.jpg',                   event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 100, img: 'dessert/elegant rose cup.jpg',       event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Kinder Joy', price: 70, img: 'dessert/kinder joy.jpg',                     event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Birthday', type: 'Non-Veg', course: 'Desserts' },


                // Parties - Anniversaries
                //Ann starter veg
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
       { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',        event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Manchowrain', price: 90, img: 'veg-meals/manchowrian.jpg',       event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'papad cup', price: 200, img: 'veg starter/ppd cup.jpg',          event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Pani Puri', price: 200, img: 'veg starter/pudina puri.jpg',      event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Papad Cup masala', price: 200, img: 'veg starter/ppd cup.jpg',   event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Starter' },

            //ann starter non-veg
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                                event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Anniversaries', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',      event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Popcorn', price: 140, img: 'nonveg starter/chiken popcorn.jpg',          event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Soup', price: 140, img: 'veg-meals/soup.jpg',                            event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',            event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',            event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Anniversaries', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Starter' },

                //Ann meal veg

                { name: 'Anniversay Cake', price: 190, img: 'dessert/anniversary cake/an cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Cake', price: 190, img: 'dessert/anniversary cake/cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Strawberry Cake', price: 190, img: 'dessert/anniversary cake/strw cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Choco Heart Cake', price: 190, img: 'dessert/anniversary cake/choco heart cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Couple Anni. Cake', price: 190, img: 'dessert/anniversary cake/couple cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Elegant Cake', price: 190, img: 'dessert/anniversary cake/elegant.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Heart Shap cake', price: 190, img: 'dessert/anniversary cake/heart cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Heart rose Cake', price: 190, img: 'dessert/anniversary cake/heart cake rose.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'layered Heart Cake', price: 190, img: 'dessert/anniversary cake/heart double.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'heart Cake', price: 190, img: 'dessert/anniversary cake/heart sh cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Layered Cake', price: 190, img: 'dessert/anniversary cake/lay cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Love cake', price: 190, img: 'dessert/anniversary cake/love cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Love Milestone Cake', price: 190, img: 'dessert/anniversary cake/love milestone cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Picture Cake', price: 190, img: 'dessert/anniversary cake/pic cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Red Cake', price: 190, img: 'dessert/anniversary cake/red cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Red Picture Cake', price: 190, img: 'dessert/anniversary cake/red pic cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Red Velvet Cake', price: 190, img: 'dessert/anniversary cake/red velvet.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Romantic Red Rose Cake', price: 190, img: 'dessert/anniversary cake/romantic red rose.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'Rose Cake', price: 190, img: 'dessert/anniversary cake/rose cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },
                { name: 'simple Heart Cake', price: 190, img: 'dessert/anniversary cake/simple heart cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Main Meal' },

                //Ann meal Non-veg
                { name: 'Heart Cake', price: 200, img: 'dessert/anniversary cake/simple heart cake.jpg',      event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: ' Cake', price: 180, img: 'dessert/anniversary cake/simple heart.jpg',                event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Cake', price: 190, img: 'dessert/anniversary cake/simple.jpg',                       event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Strawberry Cake', price: 200, img: 'dessert/anniversary cake/strw cake.jpg',         event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Anniversay Cake', price: 190, img: 'dessert/anniversary cake/an cake.jpg',           event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Cake', price: 190, img: 'dessert/anniversary cake/cake.jpg',                         event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Strawberry Cake', price: 190, img: 'dessert/anniversary cake/strw cake.jpg',         event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Choco Heart Cake', price: 190, img: 'dessert/anniversary cake/choco heart cake.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Couple Anni. Cake', price: 190, img: 'dessert/anniversary cake/couple cake.jpg',     event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Elegant Cake', price: 190, img: 'dessert/anniversary cake/elegant.jpg',              event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Heart Shap cake', price: 190, img: 'dessert/anniversary cake/heart cake.jpg',        event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Heart rose Cake', price: 190, img: 'dessert/anniversary cake/heart cake rose.jpg',   event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Red Picture Cake', price: 190, img: 'dessert/anniversary cake/red pic cake.jpg',     event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Red Velvet Cake', price: 190, img: 'dessert/anniversary cake/red velvet.jpg',        event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
         { name: 'Romantic Red Rose Cake', price: 190, img: 'dessert/anniversary cake/romantic red rose.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Rose Cake', price: 190, img: 'dessert/anniversary cake/rose cake.jpg',               event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Main Meal' },

               //Ann Dessert veg
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,            event: 'Parties',  subEvent:'Anniversaries' , type:'Veg',  course: 'Desserts'},
                 {name:'Rose Drink',price:60, img:'dessert/rose drink.jpg'   ,                     event: 'Parties',  subEvent:'Anniversaries' , type:'Veg',  course: 'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,          event: 'Parties',  subEvent:'Anniversaries' , type:'Veg',  course: 'Desserts'},
                 {name:'Ice Cream',price:80, img:'dessert/ice-creame.jpg'   ,                      event: 'Parties',  subEvent:'Anniversaries' , type:'Veg',  course: 'Desserts'},
                { name: 'Choco Shake', price: 50, img: 'dessert/cho shake.jpg',                    event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 30, img: 'dessert/chpcobar ice.jpg',                   event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Malai Kulfi', price: 50, img:'dessert/malai kulfi.jpg',                   event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 100, img: 'dessert/elegant rose cup.jpg',       event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                {name: 'Kinder Joy', price: 70, img: 'dessert/kinder joy.jpg',                     event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Veg', course: 'Desserts' },
   
                //Ann Dessert Non-veg
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,            event:'Parties',  subEvent: 'Anniversaries' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Rose Drink',price:60, img:'dessert/rose drink.jpg'   ,                     event:'Parties',  subEvent: 'Anniversaries' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,          event:'Parties',  subEvent: 'Anniversaries' , type:'Non-Veg',  course: 'Desserts'},
                 {name:'Ice Cream',price:80, img:'dessert/ice-creame.jpg'   ,                      event:'Parties',  subEvent: 'Anniversaries' , type:'Non-Veg',  course: 'Desserts'},
                { name: 'Choco Shake', price: 50, img: 'dessert/cho shake.jpg',                    event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 30, img: 'dessert/chpcobar ice.jpg',                   event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai Kulfi', price: 50, img:'dessert/malai kulfi.jpg',                   event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 100, img: 'dessert/elegant rose cup.jpg',       event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Kinder Joy', price: 70, img: 'dessert/kinder joy.jpg',                     event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Anniversaries', type: 'Non-Veg', course: 'Desserts' },

                // Parties - Baby Shower
                //baby starter veg
                { name: 'Onion samosa', price: 200, img: 'veg starter/onion samosa.jpg',  event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Bread pocket', price: 200, img: 'veg starter/bread pocket.jpg',  event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Snacks', price: 140, img: 'veg starter/banana chips.jpg',        event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Bhedh', price: 140, img: 'veg starter/besa strips.jpg',          event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'bhedh Cachori', price: 140, img: 'veg starter/bhedh-cachori.jpg',event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
       { name: 'masala bharkerwadi', price: 140, img:'veg starter/masala bhakerwadi.jpg', event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'peri peri', price: 140, img: 'veg starter/peri peri.jpg',        event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Potato Bolls', price: 140, img: 'veg starter/potato bolls.jpg',  event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Cup Snacks', price: 140, img: 'veg starter/snacks.jpg',          event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Wafers', price: 140, img: 'veg starter/wafers.jpg',              event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'French Fries', price: 250, img: 'veg-meals/frence-fries.jpg',    event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Manchowrain', price: 90, img: 'veg-meals/manchowrian.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'papad cup', price: 200, img: 'veg starter/ppd cup.jpg',          event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Pani Puri', price: 200, img: 'veg starter/pudina puri.jpg',      event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Papad Cup masala', price: 200, img: 'veg starter/ppd cup.jpg',   event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Chantni Puri', price: 200, img: 'veg starter/chatni puri.jpg',   event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Veg Rolls', price: 200, img: 'veg starter/veg rolls.jpg',        event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Veg lolli pop', price: 200, img: 'veg starter/veg lollipop.jpg', event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },
                { name: 'Dhokla', price: 200, img: 'veg starter/dhokla.jpg',              event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Starter' },

                //baby starter non-veg
                { name: 'Chicken Starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken-65', price: 140, img: 'nonveg starter/chicken-65 spricy.jpg',            event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken snacks', price: 140, img: 'nonveg starter/chicken-snack.jpg',            event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Baby Shower', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Momos', price: 200, img: 'veg starter/momos.jpg',                                event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken starter', price: 140, img: 'nonveg starter/ChickenStarter.webp',         event: 'Parties', subEvent: 'Baby Shower', type: 'NonVeg', course: 'Starter' },
                { name: 'cut let', price: 140, img: 'nonveg starter/cut clet.jpg',                        event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Strips', price: 140, img: 'nonveg starter/chicken strip.jpeg',           event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken lollipop', price: 140, img: 'nonveg starter/chicken-lollipop.webp',      event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Popcorn', price: 140, img: 'nonveg starter/chiken popcorn.jpg',          event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },
                { name: 'Chicken Soup', price: 140, img: 'veg-meals/soup.jpg',                            event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Starter' },

                //baby Meal veg
                { name: 'Palak Paneer', price: 140, img: 'veg-meals/palak paneer.jpg',               event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Butter Paneer', price: 140, img: 'veg-meals/butter paneer.jpg',             event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Egg Khurmar', price: 140, img: 'veg-meals/egg fry.jpg',                     event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Shahkari Special Plate', price: 140, img: 'veg-meals/shahkari.jpg',         event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Aalu Curry', price: 140, img: 'veg-meals/aalo curry.jpg',                   event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer Khurma', price: 140, img: 'veg-meals/paneer-khurma.jpg',             event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Paneer-Tikka', price: 140, img: 'veg-meals/paneer-rice.jpg',                event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Main Meal' },
                { name: 'Veg Kofta', price: 140, img: 'veg-meals/veg-kofta.jpg',                     event: 'Parties',  subEvent:'Baby Shower',  type:'Veg', course: 'Main Meal'},
                { name: 'Burger Chicken', price: 140, img: 'veg-meals/burger_chicken.jpg',           event: 'Parties',  subEvent:'Baby Shower',  type:'Veg', course: 'Main Meal'},
                { name: 'Maggi Soup', price: 140, img: 'veg-meals/maggi-soup.jpg',                   event: 'Parties',  subEvent:'Baby Shower',  type:'Veg', course: 'Main Meal'},
                { name: 'Manchow Soup', price: 140, img: 'veg-meals/manchow-soup.jpg',               event: 'Parties',  subEvent:'Baby Shower',  type:'Veg', course: 'Main Meal'},
                { name: 'Grilled Paneer', price: 140, img: 'veg-meals/grilled-paneer.jpg',            event:'Parties',  subEvent:'Baby Shower',  type:'Veg', course: 'Main Meal'},                { name: 'Shahkari special plate', price: 140, img: 'veg-meals/manchow-soup.jpg',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Pao Bhaji', price: 140, img: 'veg starter/pav-bhaji cheez.jpg',                      event:'Parties',  subEvent:'Baby Shower',  type: 'Veg', course: 'Main Meal'},
                { name: 'Palak paneer Khurma', price: 140, img: 'veg-meals/palak paneer khurma.jpg',         event:'Parties',  subEvent:'Baby Shower',  type: 'Veg', course: 'Main Meal'},
                { name: 'Began masala', price: 140, img: 'veg-meals/began sabji.jpg',                event:'Parties',  subEvent:'Baby Shower',  type: 'Veg', course: 'Main Meal'},

                                { name: 'Pav Bhaji', price: 140, img: '',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Palak paneer Khurma', price: 140, img: '',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},
                { name: 'Began masala', price: 140, img: '',               event:'Wedding',  subEvent: 'Wedding',  type: 'Veg', course: 'Main Meal'},

                // baby meal non-veg
                { name: 'Mandi', price: 130, img: 'meals/mandi.jpg',                  event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Special Thali', price: 130, img: 'meals/non-veg thali.webp', event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Shami kabab', price: 130, img: 'meals/shami-kabab.jpg',      event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
       { name: 'Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp',    event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khurma', price: 130, img: 'meals/khurma.jpg',                event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dum Biryani', price: 130, img: 'meals/dum-bir.jpg',          event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
    { name: 'Spicy Chicken Curry', price: 130, img: 'meals/Spicy-Chicken-Curry.webp', event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'chicken Biryani', price: 100, img: 'meals/chicken_bir.jpg',  event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Muttom Biryani', price: 150, img: 'meals/bir.jpg',           event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Fish Curry', price: 180, img: 'meals/fish-curry.jpg',        event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kabab', price: 100, img: 'meals/kabab.jpg',                  event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kheema Pao', price: 80, img: 'meals/Kheema-pao.jpg',         event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Harees', price: 130, img: 'meals/harees.jpg',                event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Khichda', price: 130, img: 'meals/khichda.jpg',              event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Dalcha Khana', price: 130, img: 'meals/dalcha khana.jpg',    event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },
                { name: 'Kofta Curry', price: 130, img: 'meals/kofta-curry.jpg',      event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Main Meal' },

             //baby dessert veg
                { name: 'Malai Kulfi', price: 50, img:'dessert/malai kulfi.jpg',                   event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                { name: 'Elegant Rose Cup', price: 100, img: 'dessert/elegant rose cup.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                { name: 'Butter Scotch Pastery', price: 140, img: 'dessert/butterscot pstry.jpg',  event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                {name: 'Kinder Joy', price: 70, img: 'dessert/kinder joy.jpg',                     event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                { name: 'Gulab Jamun Thandhai', price: 130, img:'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                 {name:'Sprinkal Shake',price:150, img:'dessert/sprinkal shake.jpg'   ,            event: 'Parties',  subEvent:'Baby Shower' , type:'Veg',  course: 'Desserts'},
                 {name:'Rose Drink',price:60, img:'dessert/rose drink.jpg'   ,                     event: 'Parties',  subEvent:'Baby Shower' , type:'Veg',  course: 'Desserts'},
                 {name:'Assorted pastery',price:150, img:'dessert/assorted pstry.jpg'   ,          event: 'Parties',  subEvent:'Baby Shower' , type:'Veg',  course: 'Desserts'},
                 {name:'Ice Cream',price:80, img:'dessert/ice-creame.jpg'   ,                      event: 'Parties',  subEvent:'Baby Shower' , type:'Veg',  course: 'Desserts'},
                { name: 'Choco Shake', price: 50, img: 'dessert/cho shake.jpg',                    event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 30, img: 'dessert/chpcobar ice.jpg',                   event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',                     event: 'Parties', subEvent: 'Baby Shower', type: 'Veg', course: 'Desserts' },

                //baby dessert non-veg
                  //baby dessert non-veg

                { name: 'Choco Shake', price: 130, img: 'dessert/cho shake.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Bar', price: 130, img: 'dessert/chpcobar ice.jpg',      event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Choco Cup', price: 130, img: 'dessert/choco cup.jpg',         event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' }, 
   { name: 'Gulab Jamun Thandhai', price: 130, img: 'dessert/gulab-jamun thandai.jpg', event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'kaddo Khir', price: 130, img: 'dessert/kaddo khir.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Malai kulfi', price: 130, img: 'dessert/malai kulfi.jpg',     event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'rasgulla', price: 130, img: 'dessert/rasgulla.jpg',           event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Rasmalai', price: 130, img: 'dessert/rasmalai.jpg',           event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Shahi Tukdha', price: 130, img: 'dessert/shahi tukda.webp',   event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Sweet oats', price: 130, img: 'dessert/sweet oats.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'oreo-ice-cream', price: 130, img:'dessert/Oreo-Ice-Cream.png',event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Badam Khir', price: 130, img: 'dessert/badam jhir.jpg',       event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                {name: 'Choco Cake', price: 130, img: 'dessert/choco cake.jpg',        event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'custard', price: 130, img: 'dessert/custard.jpg',             event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Ghewar', price: 130, img: 'dessert/ghewar.webp',              event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },
                { name: 'Jamun', price: 130, img: 'dessert/jamun.jpg',                 event: 'Parties', subEvent: 'Baby Shower', type: 'Non-Veg', course: 'Desserts' },

            ];


// ========== HELPER FUNCTION FOR SAFE IDs ==========
function getSafeId(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
}

// ========== MODAL FUNCTIONS ==========
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listeners for modals
document.getElementById('calendar-btn')?.addEventListener('click', () => openModal('calendar-modal'));
document.getElementById('bookings-btn')?.addEventListener('click', () => openModal('bookings-modal'));

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    updateGallery();
    updateCartCount();
});

// ========== CART COUNT FUNCTION ==========
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    // Optional: Update a cart badge if you have one
}

// Close modals on click outside
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Footer Tab handling
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ========== FILTER FUNCTIONS ==========
function selectEvent(event, subEvent) {
    selectedEvent = event;
    selectedSubEvent = subEvent;
    
    document.querySelectorAll('.filter-tab').forEach(tab => {
        if (tab.id.includes('wedding') || tab.id.includes('corporate') || tab.id.includes('parties')) {
            tab.classList.remove('active');
        }
    });
    
    if (event === 'Wedding') {
        document.getElementById('wedding-tab')?.classList.add('active');
        const weddingSub = document.getElementById('wedding-sub');
        if (weddingSub) weddingSub.textContent = subEvent;
        const partiesSub = document.getElementById('parties-sub');
        if (partiesSub) partiesSub.textContent = '';
    } else if (event === 'Corporate') {
        document.getElementById('corporate-tab')?.classList.add('active');
        const weddingSub = document.getElementById('wedding-sub');
        if (weddingSub) weddingSub.textContent = '';
        const partiesSub = document.getElementById('parties-sub');
        if (partiesSub) partiesSub.textContent = '';
    } else if (event === 'Parties') {
        document.getElementById('parties-tab')?.classList.add('active');
        const partiesSub = document.getElementById('parties-sub');
        if (partiesSub) partiesSub.textContent = subEvent;
        const weddingSub = document.getElementById('wedding-sub');
        if (weddingSub) weddingSub.textContent = '';
    }
    
    const vegFilter = document.getElementById('veg-nonveg-filter');
    if (vegFilter) vegFilter.style.display = 'flex';
    
    const courseFilter = document.getElementById('course-filter');
    if (courseFilter) courseFilter.style.display = 'none';
    
    selectedVegNonVeg = '';
    selectedCourse = '';
    
    updateGallery();
}

function selectVegNonVeg(type) {
    selectedVegNonVeg = type;
    
    document.querySelectorAll('#veg-nonveg-filter .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (type === 'Veg') {
        document.getElementById('veg-tab')?.classList.add('active');
    } else {
        document.getElementById('nonveg-tab')?.classList.add('active');
    }
    
    const courseFilter = document.getElementById('course-filter');
    if (courseFilter) courseFilter.style.display = 'flex';
    
    updateGallery();
}

function selectCourse(course) {
    selectedCourse = course;
    
    document.querySelectorAll('#course-filter .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (course === 'Starter') {
        document.getElementById('starter-tab')?.classList.add('active');
    } else if (course === 'Main Meal') {
        document.getElementById('main-tab')?.classList.add('active');
    } else {
        document.getElementById('desserts-tab')?.classList.add('active');
    }
    
    updateGallery();
}

// ========== UPDATED GALLERY FUNCTION ==========
function updateGallery() {
    const gallery = document.getElementById('food-gallery');
    if (!gallery) return;
    
    gallery.innerHTML = '';

    items.forEach(item => {
        if ((selectedEvent === item.event || !selectedEvent) && 
            (selectedSubEvent === item.subEvent || !selectedSubEvent) && 
            (selectedVegNonVeg === item.type || !selectedVegNonVeg) && 
            (selectedCourse === item.course || !selectedCourse)) {
            
            const safeName = getSafeId(item.name);
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'food-item';
            itemDiv.setAttribute('data-item-id', safeName);
            
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150?text=Food'">
                <div class="food-details">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price} per plate</p>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQuantity('${safeName}', -1)">-</button>
                        <input type="number" id="qty-${safeName}" class="qty-input" min="0" value="0" onchange="validateQuantity('${safeName}')">
                        <button class="qty-btn" onclick="changeQuantity('${safeName}', 1)">+</button>
                    </div>
                    <button class="add-to-cart-item" id="btn-${safeName}" onclick="addToCart('${item.name}', ${item.price}, '${safeName}', '${item.img}')">Add to Cart</button>
                </div>
            `;
            
            gallery.appendChild(itemDiv);
        }
    });
}

// ========== QUANTITY FUNCTIONS ==========
function changeQuantity(safeName, delta) {
    const input = document.getElementById(`qty-${safeName}`);
    if (input) {
        let qty = parseInt(input.value) || 0;
        qty = qty + delta;
        if (qty < 0) qty = 0;
        input.value = qty;
    }
}

function validateQuantity(safeName) {
    const input = document.getElementById(`qty-${safeName}`);
    if (input) {
        if (input.value < 0 || isNaN(input.value)) {
            input.value = 0;
        }
    }
}

// ========== YELLOW BUTTON FEEDBACK FUNCTION ==========
function showButtonFeedback(safeName, message, isError = false) {
    const button = document.getElementById(`btn-${safeName}`);
    if (!button) return;
    
    const originalText = button.textContent;
    const originalBg = button.style.backgroundColor;
    const originalColor = button.style.color;
    
    // Use yellow/gold colors only
    button.textContent = message;
    button.style.backgroundColor = '#D4AF37'; // Gold color
    button.style.color = 'black';
    button.style.transition = 'all 0.3s ease';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = originalBg;
        button.style.color = originalColor;
        button.disabled = false;
    }, 1000);
}

// ========== UPDATED ADD TO CART - STAYS ON PAGE, YELLOW BUTTON ==========
function addToCart(name, price, safeName, img) {
    console.log('Add to Cart clicked:', { name, price, safeName });
    
    const qtyInput = document.getElementById(`qty-${safeName}`);
    if (!qtyInput) {
        console.error('Quantity input not found for:', safeName);
        return;
    }
    
    const qty = parseInt(qtyInput.value) || 0;
    console.log('Quantity selected:', qty);
    
    if (qty <= 0) {
        showButtonFeedback(safeName, 'Set quantity!', true);
        return;
    }
    
    // Get existing cart
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    } catch (e) {
        console.error('Error reading cart:', e);
        cart = [];
    }
    
    // Check if item exists
    const existingIndex = cart.findIndex(item => 
        item.name === name && item.category === 'catering'
    );
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += qty;
        console.log('Updated existing item, new quantity:', cart[existingIndex].quantity);
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: qty,
            category: 'catering',
            img: img || '',
            event: selectedEvent || 'General',
            subEvent: selectedSubEvent || '',
            type: selectedVegNonVeg || '',
            course: selectedCourse || ''
        });
        console.log('Added new item to cart');
    }
    
    // Save to localStorage
    localStorage.setItem('eventCart', JSON.stringify(cart));
    console.log('Cart saved to localStorage');
    
    // Show YELLOW feedback on button
    showButtonFeedback(safeName, '✓ Added!');
    
    // Reset quantity input
    qtyInput.value = '0';
    
    // Update cart count
    updateCartCount();
    
    // NO REDIRECT - Stay on catering page
    console.log('Item added - staying on catering page');
}

// ========== BACKUP CART FUNCTIONS ==========
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (!cartModal) return;
    
    updateCartCount();
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 20px;">Your cart is empty</div>';
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;" onerror="this.src='https://via.placeholder.com/50'">
                <span>${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')" style="background:#D4AF37; color:black; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;">Remove</button>
            `;
            cartItems.appendChild(itemDiv);
        });
    }
    
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = `Total: ₹${total}`;
    }
    
    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem('eventCart')) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('eventCart', JSON.stringify(cart));
    updateCartCount();
    openCart();
}