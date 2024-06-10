

// all divisions
var state_arr = new Array("Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Dhaka", "Rangpur", "Mymensingh");



// districts
var s_a = new Array();
s_a[0]="";
s_a[1] = " Comilla | Feni | Brahmanbaria | Rangamati | Noakhali | Chandpur | Laxmipur | Chittagong | Cox's Bazar | Khagrachari | Bandarban ";
s_a[2] = " Sirajganj | Pabna | Bogra | Rajshahi | Natore | Joypurhat | Chapainawabganj | Naogaon ";
s_a[3] = " Jessore | Satkhira | Meherpur | Narail | Chuadanga | Kushtia | Magura | Khulna | Bagerhat | Jhenaidah ";
s_a[4] = " Jhalokati | Patuakhali | Pirojpur | Barisal | Bhola | Barguna ";
s_a[5] = " Sylhet | Moulvibazar | Habiganj | Sunamganj ";
s_a[6] = " Narsingdi | Gazipur | Shariatpur | Narayanganj | Tangail | Kishoreganj | Manikganj | Dhaka | Munshiganj | Rajbari | Madaripur | Gopalganj | Faridpur ";
s_a[7] = " Panchagarh | Dinajpur | Lalmonirhat | Nilphamari | Gaibandha | Thakurgaon | Rangpur | Kurigram ";
s_a[8] = " Sherpur | Jamalpur | Netrokona | Mymensingh ";






function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select District','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}



// dropdown for rainfall prediction

var months = ["ANNUAL", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "Jan-Feb", "Mar-May", "Jun-Sep", "Oct-Dec"]; 

function print_months(month_id) {
    var option_months = document.getElementById(month_id);
    option_months.length = 0;
    option_months.options[0] = new Option('Select Month', '');
    option_months.selectedIndex = 0;
    for (var i = 0; i < months.length; i++) {
        option_months.options[option_months.length] = new Option(months[i], months[i]);
    }
}


var region = ["ANDAMAN & NICOBAR ISLANDS", "ARUNACHAL PRADESH", "ASSAM & MEGHALAYA", "NAGA MANI MIZO TRIPURA", "SUB HIMALAYAN WEST BENGAL & SIKKIM", "GANGETIC WEST BENGAL", "ORISSA", "JHARKHAND", "BIHAR", "EAST UTTAR PRADESH", "WEST UTTAR PRADESH", "UTTARAKHAND", "HARYANA DELHI & CHANDIGARH", "PUNJAB", "HIMACHAL PRADESH", "JAMMU & KASHMIR", "WEST RAJASTHAN", "EAST RAJASTHAN", "WEST MADHYA PRADESH", "EAST MADHYA PRADESH", "GUJARAT REGION", "SAURASHTRA & KUTCH", "KONKAN & GOA", "MADHYA MAHARASHTRA", "MATATHWADA", "VIDARBHA", "CHHATTISGARH", "COASTAL ANDHRA PRADESH", "TELANGANA", "RAYALSEEMA", "TAMIL NADU", "COASTAL KARNATAKA", "NORTH INTERIOR KARNATAKA", "SOUTH INTERIOR KARNATAKA", "KERALA", "LAKSHADWEEP"];

function print_region(region_id) {
    var option_region = document.getElementById(region_id);
    option_region.length = 0;
    option_region.options[0] = new Option('Select Region', '');
    option_region.selectedIndex = 0;
    for (var i = 0; i < region.length; i++) {
        option_region.options[option_region.length] = new Option(region[i], region[i]);
    }
}


// district crop dropdown for yield prediction

const cropOptions = {
  BAGALKOT: {
	Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  BANGALORE_RURAL: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  BELGAUM: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  BELLARY: {
    Kharif: ['Castor seed', 'Cowpea(Lobia)', 'Dry ginger', 'Gram', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tomato', 'Turmeric']
  },
  BENGALURU_URBAN: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Rice', 'Sunflower'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
   BIDAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Dry chillies', 'Gram', 'Groundnut', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugar cane', 'Sweet potato', 'Tomato', 'Turmeric']
  },
  BIJAPUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Potato', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Potato', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric', 'Coconut']
  },
  CHAMARAJANAGAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Gram', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tomato', 'Turmeric', 'Tobacco']
  },
  CHIKBALLAPUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Small millets', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Turmeric']
  },
  CHIKMAGALUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
    WholeYear: ['Arecanut', 'Cardamom', 'Coriander', 'Garlic', 'Sugarcane', 'Turmeric', 'Black pepper', 'Coconut', 'Dry chillies', 'Banana', 'Onion', 'Potato', 'Sweet potato', 'Tapioca', 'Tobacco', 'Peas & beans (Pulses)', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Grapes', 'Mango', 'Other Fresh Fruits', 'Pome Fruit', 'Tomato', 'Cotton(lint)', 'Dry ginger', 'Cashewnut', 'Papaya', 'Sannhamp']
  },
  CHITRADURGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sugarcane', 'Tomato', 'Turmeric', 'Tobacco']
  },
  DAKSHIN_KANNAD: {
    Kharif: ['Black pepper', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Rice', 'Sesamum', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Rabi pulses', 'Paddy', 'Rice', 'Urad'],
    Summer:['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Paddy', 'Rice'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Mango', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
  },
  DAVANGERE: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Cotton(lint)'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  DHARWAD: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Potato', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  GADAG: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
	WholeYear:['Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  GULBARGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Wheat'],
    Summer: ['Bajra', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut ', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Tomato', 'Turmeric']
  },
  HAVERI: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  HASSAN: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
  KODAGU: {
    Kharif: ['Arhar/Tur', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Ragi', 'Rice'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Maize', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  KOLAR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower'],
    Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Tomato', 'Turmeric']
  },
  KOPPAL: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Peas & beans (Pulses)', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coconut', 'Coriander', 'Dry chillies', 'Grapes', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Turmeric']
  },
  MANDYA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad', 'Potato'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Arecanut', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Tobacco', 'Turmeric']
  },
  MYSORE: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cotton(lint)', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Mesta', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tomato', 'Turmeric']
  },
  RAMANAGARA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice'],
    Summer: ['Dry chillies', 'Groundnut', 'Maize', 'Peas & beans (Pulses)', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Banana', 'Black pepper', 'Cashewnut', 'Coconut', 'Coriander', 'Dry ginger', 'Garlic', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric', 'Tobacco']
  },
  RAICHUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Rice', 'Sunflower'],
	WholeYear: ['Banana', 'Brinjal', 'Citrus Fruit', 'Cotton(lint)', 'Coriander', 'Coconut', 'Dry chillies', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  SHIMOGA: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Black pepper', 'Castor seed', 'Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Peas & beans (Pulses)', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Mango', 'Onion', 'Other Fresh Fruits', 'Peas & beans (Pulses)', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  TUMKUR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cowpea(Lobia)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Cowpea(Lobia)', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Arecanut', 'Banana', 'Beans & Mutter(Vegetable)', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Garlic', 'Grapes', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Peas & beans (Pulses)', 'Pome Fruit', 'Potato', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Tomato', 'Turmeric']
  },
  UDUPI: {
    Kharif: ['Dry chillies', 'Dry ginger', 'Groundnut', 'Horse-gram', 'Moong(Green Gram)', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Urad'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Maize', 'Rice'],
	WholeYear: ['Arecanut', 'Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric']
  },
  UTTAR_KANNAD: {
    Kharif: ['Arhar/Tur', 'Black pepper', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Mesta', 'Moong(Green Gram)', 'Other Kharif pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sunflower'],
    Rabi: ['Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Rabi pulses', 'Paddy', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad'],
    Summer: ['Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Paddy', 'Ragi', 'Rice', 'Sunflower'],
	WholeYear: ['Arcanut (Processed)', 'Atcanut (Raw)', 'Banana', 'Black pepper', 'Brinjal', 'Cardamom', 'Cashewnut', 'Cashewnut Processed', 'Cashewnut Raw', 'Citrus Fruit', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Dry ginger', 'Mango', 'Onion', 'Other Fresh Fruits', 'Papaya', 'Pome Fruit', 'Sannhamp', 'Sugarcane', 'Sweet potato', 'Tomato', 'Tobacco', 'Turmeric']
  },
  YADGIR: {
    Kharif: ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other Kharif pulses', 'Rice', 'Sesamum', 'Small millets', 'Sunflower'],
    Rabi: ['Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Onion', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sunflower', 'Urad', 'Wheat'],
    Summer: ['Bajra', 'Cowpea(Lobia)', 'Dry chillies', 'Groundnut', 'Jowar', 'Maize', 'Onion', 'Rice', 'Sunflower'],
	WholeYear: ['Coconut', 'Coriander', 'Mesta', 'Sugarcane', 'Sweet potato']
  } 
};
