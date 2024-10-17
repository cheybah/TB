import React from 'react' ;

const destinations = [
{
    id: 1,
    image: "/radisson.jpg",
    discount: "10% OFF",
    name: "Radisson Blu Palace Resort et Thalasso",
    location: "Djerba, Tunisia",
    price: "449 DT",
    originalPrice: "699 DT",
    rating: 5,
    date: "Available from 20th Oct",
},
{   
    id: 2,
    image: "/hammamet.jpg",
    discount: "25% OFF",
    name: "La Badira Hotel",
    location: "Hammamet, Tunisia",
    price: "349 DT",
    originalPrice: "499 DT",
    rating: 4,
    date: "Available from 25th Oct",
}
];

  const TestD= () => {
    return (
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-center font-bold text-2xl antialiased">
          Les Imbattables du Moment
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={ `bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg`}
            >
              <a className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={destination.image} alt="hotel image" />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{destination.discount}</span>
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">{destination.name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">{destination.price}</span>
                    <span className="text-sm text-slate-900 line-through">{destination.originalPrice}</span>
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        aria-hidden="true"
                        className={`h-5 w-5 ${index < destination.rating ? 'text-yellow-300' : 'text-white'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Réserver Maintenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  



export default TestD;