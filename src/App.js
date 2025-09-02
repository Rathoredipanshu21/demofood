import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'https://esm.sh/gsap';
import {
    FiMenu, FiX, FiHome, FiShoppingBag, FiUser, FiSettings, FiLogOut, FiMapPin,
    FiChevronRight, FiChevronLeft, FiPlusCircle, FiArrowRight, FiZap, FiCpu,
    FiCoffee, FiBookOpen, FiActivity, FiWind
} from 'https://esm.sh/react-icons/fi';
import { FaUtensils, FaTaxi, FaSpa, FaPaintBrush } from 'https://esm.sh/react-icons/fa';

// --- Category Styling Helper ---
const categoryStyles = {
    'Restaurant': { icon: <FaUtensils />, color: 'violet' },
    'Taxi': { icon: <FaTaxi />, color: 'cyan' },
    'Spa': { icon: <FaSpa />, color: 'pink' },
    'Boutique': { icon: <FiShoppingBag />, color: 'teal' },
    'Electronics': { icon: <FiCpu />, color: 'sky' },
    'Bakery': { icon: <FiCoffee />, color: 'orange' },
    'Book Store': { icon: <FiBookOpen />, color: 'amber' },
    'Fitness': { icon: <FiActivity />, color: 'lime' },
    'Cleaning': { icon: <FiWind />, color: 'emerald' },
    'Art Studio': { icon: <FaPaintBrush />, color: 'rose' }
};

// --- Dummy JSON Data ---
const dummyData = {
    sellers: [
        {
            id: 'seller_1',
            name: 'Shyam\'s Ventures',
            location: 'Mumbai, India',
            image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            businesses: [
                { categoryName: 'Restaurant', items: [{ id: 1, name: 'Sizzling Steak', price: 25.99, image: 'https://images.unsplash.com/photo-1551028150-64b9f398f67b?auto=format&fit=crop&q=60&w=500' }] },
                { categoryName: 'Taxi', items: [{ id: 2, name: 'City Tour', price: 150.00, image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3a7?auto=format&fit=crop&q=60&w=500' }] },
                { categoryName: 'Spa', items: [{ id: 3, name: 'Deep Tissue Massage', price: 90.00, image: 'https://images.unsplash.com/photo-1599313229983-75c1a79275a5?auto=format&fit=crop&q=60&w=500' }] }
            ]
        },
        {
            id: 'seller_2',
            name: 'Priya\'s Emporium',
            location: 'Delhi, India',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
            businesses: [
                { categoryName: 'Restaurant', items: [{ id: 8, name: 'Spicy Chaat', price: 5.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983d34?auto=format&fit=crop&q=60&w=500' }] },
                { categoryName: 'Boutique', items: [{ id: 10, name: 'Silk Saree', price: 250.00, image: 'https://images.unsplash.com/photo-1618244976974-3938de8f2f29?auto=format&fit=crop&q=60&w=500' }] }
            ]
        },
        {
            id: 'seller_3',
            name: 'Rohan Tech',
            location: 'Bangalore, India',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            businesses: [
                { categoryName: 'Electronics', items: [] },
                { categoryName: 'Cleaning', items: [] }
            ]
        },
        {
            id: 'seller_4',
            name: 'Anita\'s Bakery',
            location: 'Kolkata, India',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            businesses: [
                { categoryName: 'Bakery', items: [] },
                { categoryName: 'Restaurant', items: [] }
            ]
        },
        {
            id: 'seller_5',
            name: 'Vikram\'s Reads',
            location: 'Chennai, India',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            businesses: [
                { categoryName: 'Book Store', items: [] },
                { categoryName: 'Bakery', items: [] }
            ]
        },
        {
            id: 'seller_6',
            name: 'Sunita\'s Fitness',
            location: 'Pune, India',
            image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80',
            businesses: [
                { categoryName: 'Fitness', items: [] },
                { categoryName: 'Spa', items: [] }
            ]
        },
        {
            id: 'seller_7',
            name: 'Deepak\'s Clean Co.',
            location: 'Hyderabad, India',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            businesses: [
                { categoryName: 'Cleaning', items: [] },
                { categoryName: 'Taxi', items: [] }
            ]
        },
        {
            id: 'seller_8',
            name: 'Zara\'s Artistry',
            location: 'Jaipur, India',
            image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
            businesses: [
                { categoryName: 'Art Studio', items: [] },
                { categoryName: 'Boutique', items: [] }
            ]
        },
        {
            id: 'seller_9',
            name: 'Arjun\'s Wheels',
            location: 'Ahmedabad, India',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            businesses: [
                { categoryName: 'Taxi', items: [] },
                { categoryName: 'Cleaning', items: [] }
            ]
        },
        {
            id: 'seller_10',
            name: 'Mira\'s Corner',
            location: 'Surat, India',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            businesses: [
                { categoryName: 'Restaurant', items: [] },
                { categoryName: 'Book Store', items: [] },
                { categoryName: 'Boutique', items: [] }
            ]
        },
    ]
};

const heroCarouselData = [
    { title: "Flat 30% Off", subtitle: "On All Restaurant Services", bg: "from-violet-500 to-purple-600" },
    { title: "New Seller Bonus", subtitle: "Zero Commission For 1 Month", bg: "from-cyan-500 to-blue-600" },
    { title: "Boost Your Business", subtitle: "Featured Listings Now Available", bg: "from-pink-500 to-rose-600" }
];

// --- Main App Component ---
export default function App() {
    // --- State Management ---
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [view, setView] = useState('home');
    const [selectedSeller, setSelectedSeller] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const mainContentRef = useRef(null);

    // --- Page Change Animation ---
    useEffect(() => {
        if (mainContentRef.current) {
            gsap.fromTo(mainContentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
        }
    }, [view]);


    // --- Navigation Handlers ---
    const handleSelectSeller = (seller) => {
        // Create a full business object for the detail page view
        const sellerWithFullBusinesses = {
            ...seller,
            businesses: seller.businesses.map(b => ({
                categoryId: b.categoryName.toLowerCase().replace(' ', '_'),
                categoryName: b.categoryName,
                categoryIcon: React.cloneElement(categoryStyles[b.categoryName].icon, { className: `text-xl text-${categoryStyles[b.categoryName].color}-300`}),
                items: b.items
            }))
        };
        setSelectedSeller(sellerWithFullBusinesses);
        setView('sellerDetail');
        window.scrollTo(0, 0);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setView('categoryDetail');
        window.scrollTo(0, 0);
    };

    const handleBack = (targetView) => {
        setView(targetView);
        window.scrollTo(0, 0);
    };

    // --- Reusable Components ---

    const Navbar = () => (
        <nav className="sticky top-0 z-50 px-4 py-3 flex items-center justify-between bg-gray-900/30 backdrop-blur-xl border-b border-white/10">
            <button onClick={() => setSidebarOpen(true)} className="text-2xl text-white">
                <FiMenu />
            </button>
            <div className="flex items-center gap-2 font-bold text-xl text-white tracking-wider">
                <FiZap className="text-cyan-300" />
                <span>AdminFlow</span>
            </div>
            <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-9 h-9 rounded-full border-2 border-cyan-400" />
        </nav>
    );

    const Sidebar = () => (
        <>
            <div
                className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4 flex justify-between items-center border-b border-white/10">
                    <h2 className="text-lg font-bold text-white">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-400">
                        <FiX />
                    </button>
                </div>
                <ul className="p-4 space-y-2">
                    {[
                        { icon: <FiHome />, label: 'Home' },
                        { icon: <FiShoppingBag />, label: 'All Orders' },
                        { icon: <FiUser />, label: 'My Profile' },
                        { icon: <FiSettings />, label: 'Settings' },
                        { icon: <FiLogOut />, label: 'Logout' },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-4 p-3 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all cursor-pointer">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

    const HeroCarousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const slideRef = useRef(null);
        const textRefs = useRef([]);

        const goToSlide = (index) => {
            setCurrentIndex(index);
            if (!slideRef.current) return;
            const slideWidth = slideRef.current.clientWidth;
            gsap.to(slideRef.current.parentElement, { x: -index * slideWidth, duration: 0.8, ease: "power4.inOut" });
            
            if (textRefs.current[index]) {
                const textElements = textRefs.current[index].children;
                gsap.fromTo(textElements, 
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 0.4 }
                );
            }
        };
        
        useEffect(() => {
            const interval = setInterval(() => {
                const newIndex = (currentIndex + 1) % heroCarouselData.length;
                goToSlide(newIndex);
            }, 5000);
            
             if (textRefs.current[0]) {
                const textElements = textRefs.current[0].children;
                gsap.fromTo(textElements, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 0.5 });
            }

            return () => clearInterval(interval);
        }, [currentIndex]);
        
        return (
            <div className="relative w-full h-56 rounded-2xl overflow-hidden my-6 shadow-2xl shadow-black/30">
                <div className="flex h-full">
                    {heroCarouselData.map((slide, index) => (
                        <div key={index} ref={el => index === 0 ? slideRef.current = el : null} className={`w-full h-full flex-shrink-0 bg-gradient-to-br ${slide.bg} flex flex-col justify-center items-center text-center p-4`}>
                           <div ref={el => textRefs.current[index] = el}>
                               <h2 className="text-3xl font-extrabold text-white tracking-tight">{slide.title}</h2>
                               <p className="text-white/80 mt-2">{slide.subtitle}</p>
                           </div>
                        </div>
                    ))}
                </div>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroCarouselData.map((_, index) => (
                        <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/40'}`}></button>
                    ))}
                </div>
            </div>
        );
    };
    
    const Footer = () => (
        <footer className="mt-16 p-6 bg-transparent text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} AdminFlow. All Rights Reserved.</p>
            <p className="mt-1">Designed for a stunning client experience.</p>
        </footer>
    );

    // --- Page Views ---

    const HomePage = () => {
        const sellerListRef = useRef(null);
        useEffect(() => {
            if (sellerListRef.current) {
                gsap.fromTo(sellerListRef.current.children, 
                    { opacity: 0, y: 50 }, 
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
                );
            }
        }, []);
        
        return (
        <div className="p-4">
             <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">Welcome, Admin!</h1>
                <p className="text-lg text-gray-400 mt-2">Manage everything with style and flow.</p>
            </div>
            <HeroCarousel />
            <h2 className="text-2xl font-bold text-white tracking-wide">Sellers Overview</h2>
            <div ref={sellerListRef} className="mt-4 space-y-6">
                {dummyData.sellers.map((seller) => {
                   const colorClass = `cyan`; // Default color
                   return (
                    <div
                        key={seller.id}
                        onClick={() => handleSelectSeller(seller)}
                        className={`bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-${colorClass}-300/50 cursor-pointer group`}
                    >
                        <div className="flex items-center gap-4">
                            <img src={seller.image} alt={seller.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" />
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-white">{seller.name}</h3>
                                <p className="text-sm text-gray-400 flex items-center gap-1"><FiMapPin size={14} /> {seller.location}</p>
                            </div>
                            <FiChevronRight className="text-2xl text-gray-500 transition-transform group-hover:translate-x-1" />
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                           {seller.businesses.map(business => {
                               const style = categoryStyles[business.categoryName] || { icon: <FiZap />, color: 'gray' };
                               return (
                                   <div key={business.categoryName} className={`flex items-center gap-2 text-xs font-medium text-${style.color}-300 bg-${style.color}-500/10 border border-${style.color}-500/20 rounded-full px-3 py-1`}>
                                       {React.cloneElement(style.icon, { className: "text-sm" })}
                                       <span>{business.categoryName}</span>
                                   </div>
                               )
                           })}
                        </div>
                    </div>
                )})}
            </div>
        </div>
        );
    };

    const SellerDetailPage = () => (
        <div className="p-4">
            <button onClick={() => handleBack('home')} className="flex items-center gap-2 mb-6 text-cyan-300 font-semibold">
                <FiChevronLeft /> Back to Sellers
            </button>
            <div className="flex flex-col items-center text-center">
                <img src={selectedSeller.image} alt={selectedSeller.name} className="w-28 h-28 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/20" />
                <h1 className="mt-4 text-3xl font-bold text-white">{selectedSeller.name}</h1>
                <p className="text-gray-400 flex items-center gap-1"><FiMapPin /> {selectedSeller.location}</p>
            </div>
            <h2 className="mt-10 text-2xl font-bold text-white tracking-wide">Businesses</h2>
            <div className="mt-4 grid grid-cols-1 gap-5">
                {selectedSeller.businesses.map((business) => (
                    <div
                        key={business.categoryId}
                        onClick={() => handleSelectCategory(business)}
                        className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:border-violet-400/50 cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-700/50 rounded-lg">{business.categoryIcon}</div>
                            <h3 className="font-semibold text-lg text-white">{business.categoryName}</h3>
                        </div>
                        <FiArrowRight className="text-2xl text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-violet-300" />
                    </div>
                ))}
            </div>
        </div>
    );
    
    const CategoryDetailPage = () => (
        <div className="p-4">
            <button onClick={() => handleBack('sellerDetail')} className="flex items-center gap-2 mb-6 text-cyan-300 font-semibold">
                <FiChevronLeft /> Back to Businesses
            </button>
             <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 text-3xl font-bold text-white">
                    {React.cloneElement(selectedCategory.categoryIcon, { className: "text-3xl text-cyan-300" })}
                    <h1>{selectedCategory.categoryName}</h1>
                </div>
                 <p className="text-gray-400 mt-1">Items from "{selectedSeller.name}"</p>
            </div>
            <div className="space-y-6">
                {selectedCategory.items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden"
                    >
                       <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
                       <div className="p-4">
                           <h3 className="font-bold text-xl text-white">{item.name}</h3>
                           <p className="text-gray-400 mt-1 text-sm">{item.description || 'No description available.'}</p>
                           <div className="mt-4 flex justify-between items-center">
                               <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">${item.price.toFixed(2)}</p>
                               <button className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95">
                                   <FiPlusCircle/>
                                   Order
                               </button>
                           </div>
                       </div>
                    </div>
                ))}
                {selectedCategory.items.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        <p>No items listed for this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );

    // --- Render Logic ---
    const renderContent = () => {
        switch (view) {
            case 'sellerDetail':
                return <SellerDetailPage />;
            case 'categoryDetail':
                return <CategoryDetailPage />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-[#0D1127] min-h-screen font-sans text-gray-200 overflow-x-hidden">
             {/* These classes are dynamically generated, so we include them here for Tailwind's JIT compiler */}
            <span className="hidden text-violet-300 bg-violet-500/10 border-violet-500/20"></span>
            <span className="hidden text-cyan-300 bg-cyan-500/10 border-cyan-500/20"></span>
            <span className="hidden text-pink-300 bg-pink-500/10 border-pink-500/20"></span>
            <span className="hidden text-teal-300 bg-teal-500/10 border-teal-500/20"></span>
            <span className="hidden text-sky-300 bg-sky-500/10 border-sky-500/20"></span>
            <span className="hidden text-orange-300 bg-orange-500/10 border-orange-500/20"></span>
            <span className="hidden text-amber-300 bg-amber-500/10 border-amber-500/20"></span>
            <span className="hidden text-lime-300 bg-lime-500/10 border-lime-500/20"></span>
            <span className="hidden text-emerald-300 bg-emerald-500/10 border-emerald-500/20"></span>
            <span className="hidden text-rose-300 bg-rose-500/10 border-rose-500/20"></span>

            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <Sidebar />
            <div className="relative">
                <Navbar />
                <main ref={mainContentRef}>
                    {renderContent()}
                </main>
                <Footer />
            </div>
        </div>
    );
}

