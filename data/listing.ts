const mus = (id: string, w = 1200) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/${id}.jpeg?im_w=${w}`;

export const IMG = {
  hero: mus("090d8b0b-b539-42c0-84f8-e1fb0cdf9a93"),
  livingOpen: mus("9be71047-fc52-438a-9270-75cb470f6752", 720),
  jacuzzi: mus("f6de1663-4e9c-4414-b63b-29a154a92ee1", 720),
  bedroom: mus("67c61c6f-6260-4809-9510-0360e58a345d", 720),
  exterior: mus("23ea6621-6f74-4baa-acea-2fd03e312b41", 720),
  livingRoom: mus("a9831aeb-f441-44f5-a38f-4cf54e3f0fcf", 720),
  extra1: mus("c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d", 720),
  host: "https://a0.muscache.com/im/pictures/user/User/original/6b72f8b5-0e66-4bf1-8ba3-ff0f87ff3687.jpeg?im_w=240",
  laurelL:
    "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png?im_w=240",
  laurelR:
    "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png?im_w=240",
};

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  locationLine: "Entire serviced apartment in Candolim, India",
  facts: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: "4.95",
  reviews: 19,
  nights: 5,
  price: "₹28,499",
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  checkInLabel: "18 Oct 2026",
  checkOutLabel: "23 Oct 2026",
  guests: 2,
  cancelBy: "17 October",
  city: "Candolim",
  mapLine: "Candolim, Goa, India",
};

export type TourPhoto = {
  src: string;
  alt: string;
  globalIndex: number;
};

export type TourSection = {
  id: string;
  name: string;
  subtext: string;
  thumbSrc: string;
  layout?: "default" | "triple-mid";
  images: Omit<TourPhoto, "globalIndex">[];
};

const tourSectionDefs: TourSection[] = [
  {
    id: "living-room-1",
    name: "Living room 1",
    subtext: "Sofa · Air conditioning · Ceiling fan · TV",
    thumbSrc: mus("a9831aeb-f441-44f5-a38f-4cf54e3f0fcf", 240),
    images: [
      { src: mus("a9831aeb-f441-44f5-a38f-4cf54e3f0fcf"), alt: "Living room sofa and dining" },
      { src: mus("a45feaa2-b607-4092-83ac-5fd4b2894959"), alt: "TV console view" },
      { src: mus("f1da1c3d-0d10-481e-9b63-c71f9073f30b"), alt: "Dining and living room angle" },
      { src: mus("1c827136-4a85-4fe0-8e69-3fd8ea19bb17"), alt: "Living room seating detail" },
    ],
  },
  {
    id: "living-room-2",
    name: "Living room 2",
    subtext: "Ceiling fan · Hot tub",
    thumbSrc: mus("090d8b0b-b539-42c0-84f8-e1fb0cdf9a93", 240),
    images: [
      { src: mus("090d8b0b-b539-42c0-84f8-e1fb0cdf9a93"), alt: "Outdoor lounge with rattan seating" },
      { src: mus("9be71047-fc52-438a-9270-75cb470f6752"), alt: "Jacuzzi lounge seating" },
      { src: mus("f6de1663-4e9c-4414-b63b-29a154a92ee1"), alt: "Private jacuzzi" },
    ],
  },
  {
    id: "full-kitchen",
    name: "Full kitchen",
    subtext:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumbSrc: mus("0622ab42-b851-4d55-9d9f-df3143bc5909", 240),
    images: [
      { src: mus("0622ab42-b851-4d55-9d9f-df3143bc5909"), alt: "Kitchen with refrigerator" },
      { src: mus("42befad7-fb29-473d-91db-b03e7a544d1d"), alt: "Kitchen counter and dining" },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    subtext:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    thumbSrc: mus("67c61c6f-6260-4809-9510-0360e58a345d", 240),
    images: [
      { src: mus("67c61c6f-6260-4809-9510-0360e58a345d"), alt: "Bedroom with double bed" },
      { src: mus("c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d"), alt: "Bedroom window view" },
      { src: mus("5b856fde-a393-41bf-b373-c9d02e64221f"), alt: "Nightstand and wardrobe" },
      { src: mus("2367476f-11c4-4a14-a7c6-267be62c1d59"), alt: "Bedroom side view" },
    ],
  },
  {
    id: "full-bathroom",
    name: "Full bathroom",
    subtext: "Hot water · Shower · Mirror",
    thumbSrc: mus("97c78f8a-5090-4663-aebc-ba4e13b47092", 240),
    images: [
      { src: mus("97c78f8a-5090-4663-aebc-ba4e13b47092"), alt: "Bathroom vanity" },
      { src: mus("608748cd-6ee7-4a71-88a2-ba79d3ddba5a"), alt: "Glass shower enclosure" },
      { src: mus("48a8ffbc-fbf7-4f84-bc29-ee400da3f08b"), alt: "Bathroom overview" },
    ],
  },
  {
    id: "gym",
    name: "Gym",
    subtext: "Shared fitness center in building",
    thumbSrc: mus("9aa8e65f-94ac-4ba0-9a10-9ec91e536d22", 240),
    images: [
      { src: mus("9aa8e65f-94ac-4ba0-9a10-9ec91e536d22"), alt: "Fitness equipment" },
      { src: mus("3c90338e-86b4-423f-aae1-279e0ccc3a18"), alt: "Gym treadmill and weights" },
    ],
  },
  {
    id: "exterior",
    name: "Exterior",
    subtext: "Building facade & surroundings",
    thumbSrc: mus("23ea6621-6f74-4baa-acea-2fd03e312b41", 240),
    images: [
      { src: mus("23ea6621-6f74-4baa-acea-2fd03e312b41"), alt: "Building exterior" },
      { src: mus("9642a60d-e9de-4e1a-89c2-9ebd230f4a74"), alt: "Entrance and courtyard" },
    ],
  },
  {
    id: "pool",
    name: "Pool",
    subtext: "Shared outdoor swimming pool",
    thumbSrc: mus("fc02f48f-a937-42c5-895d-f9cc3113d6ca", 240),
    images: [
      { src: mus("fc02f48f-a937-42c5-895d-f9cc3113d6ca"), alt: "Swimming pool" },
      { src: mus("3c6e6809-1bb1-47a6-8e24-aff593e1c28f"), alt: "Pool deck loungers" },
      { src: mus("79addceb-8c2d-419b-80ff-e29af426a94c"), alt: "Pool reflection" },
    ],
  },
  {
    id: "additional-photos",
    name: "Additional photos",
    subtext: "",
    thumbSrc: mus("8eb65a8b-e795-4870-b141-6f63b1be24ae", 240),
    layout: "triple-mid",
    images: [
      { src: mus("56c44812-52c0-4481-90d8-101ec1f34c7a"), alt: "Kitchen sink and washer" },
      { src: mus("8eb65a8b-e795-4870-b141-6f63b1be24ae"), alt: "Lounge seating" },
      { src: mus("34529829-a971-44d3-ac2f-90ea3678a34d"), alt: "Dining area" },
      { src: mus("153aa732-4935-48b8-a6fe-b469b6af5efc"), alt: "Jacuzzi seating" },
      { src: mus("70325367-cbae-4993-b560-18cd3f6edd53"), alt: "Living room with television" },
    ],
  },
];

let photoIndex = 0;
export const tourSections = tourSectionDefs.map((section) => ({
  ...section,
  images: section.images.map((img) => ({ ...img, globalIndex: photoIndex++ })),
}));

export const photos: TourPhoto[] = tourSections.flatMap((s) => s.images);

export const heroPhotos = [
  photos[4],
  photos[0],
  photos[9],
  photos[6],
  photos[18],
];

export const amenities = [
  { icon: "kitchen", label: "Kitchen" },
  { icon: "wifi", label: "Wifi" },
  { icon: "workspace", label: "Dedicated workspace" },
  { icon: "parking", label: "Free parking on premises" },
  { icon: "pool", label: "Pool" },
  { icon: "hottub", label: "Hot tub" },
  { icon: "pets", label: "Pets allowed" },
  { icon: "camera", label: "Exterior security cameras on property" },
  { icon: "co", label: "Carbon monoxide alarm" },
  { icon: "smoke", label: "Smoke alarm" },
];

export const cohosts = [
  { name: "Sharath", color: "#7A4F3A", img: true },
  { name: "Simran", color: "#3D3D3D", img: true },
  { name: "Shruti", color: "#F6C9CF", letter: "S", letterColor: "#C13584" },
  { name: "Aman Dev Pahwa", color: "#8A6A4A", img: true },
  { name: "Pallavi", color: "#2F6B3A", img: true },
  { name: "Anisha", color: "#D6E4F0", letter: "A", letterColor: "#3B82C4" },
  { name: "Maria Karen Priyanka", color: "#C4A574", img: true },
  { name: "Satyukta", color: "#6B8F71", img: true },
];

export const reviews = [
  {
    name: "Amit",
    tenure: "2 months on Airbnb",
    when: "1 week ago",
    letter: "A",
    bg: "#E8D5C4",
    text: "Very helpful and responsive team. Safe and peaceful stay, loved everything about the property.",
    long: false,
  },
  {
    name: "Abheesh",
    tenure: "3 years on Airbnb",
    when: "2 weeks ago",
    img: true,
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and love to stay here again.",
    long: true,
  },
  {
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    when: "May 2026",
    img: true,
    text: "the host nitish was really great help",
    long: false,
  },
  {
    name: "Vedant",
    tenure: "4 years on Airbnb",
    when: "May 2026",
    letter: "V",
    bg: "#E8DFF5",
    letterColor: "#6B4EA3",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine...",
    long: true,
  },
  {
    name: "Vaibhav S",
    tenure: "1 year on Airbnb",
    when: "April 2026",
    img: true,
    text: "Great location and a comfortable stay overall.",
    long: false,
  },
  {
    name: "Mehul",
    tenure: "2 years on Airbnb",
    when: "April 2026",
    img: true,
    text: "Wonderful hospitality and a very clean apartment.",
    long: false,
  },
];

export const nearby = [
  {
    title: "Beautiful Studio with a view to die for",
    price: "₹23,000",
    rating: "4.91",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,718",
    rating: "4.93",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "GreenBage Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,042",
    rating: "4.95",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  },
];

export const mentionTags = [
  { label: "Comfort", count: 6, bg: "#D1EADF", icon: "leaf" },
  { label: "Accuracy", count: 5, bg: "#D4E6F1", icon: "target" },
  { label: "Hot tub", count: 5, bg: "#F6D5C8", icon: "tub" },
  { label: "Condition", count: 4, bg: "#F6D0D8", icon: "spark" },
  { label: "Hospitality", count: 8, bg: "#F3C6D3", icon: "heart" },
  { label: "Cleanliness", count: 4, bg: "#F8DCC8", icon: "spray" },
  { label: "Amenities", count: 2, bg: "#D6EAF8", icon: "grid" },
];
