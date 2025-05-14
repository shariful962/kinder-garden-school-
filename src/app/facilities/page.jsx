
import {
  MdComputer,
  MdLibraryBooks,
  MdDirectionsBus,
  MdOutlineSecurity,
  MdSportsSoccer,
  MdOutlineBathroom,
  MdBrush,
  MdMusicNote,
  MdSmartDisplay,
} from 'react-icons/md';

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive boards and multimedia for better learning.",
      icon: <MdSmartDisplay className="text-5xl text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Library",
      description: "Storybooks and a peaceful reading corner for kids.",
      icon: <MdLibraryBooks className="text-5xl text-green-500 mx-auto mb-4" />,
    },
    {
      title: "Playground",
      description: "Slides, swings and fun outdoor games.",
      icon: <MdSportsSoccer className="text-5xl text-orange-500 mx-auto mb-4" />,
    },
    {
      title: "Computer Lab",
      description: "Kids learn basic computer skills with fun activities.",
      icon: <MdComputer className="text-5xl text-purple-500 mx-auto mb-4" />,
    },
    {
      title: "Art & Craft",
      description: "Drawing, coloring, and crafts to boost creativity.",
      icon: <MdBrush className="text-5xl text-pink-500 mx-auto mb-4" />,
    },
    {
      title: "Music & Dance",
      description: "Learn rhythm, songs and express through dance.",
      icon: <MdMusicNote className="text-5xl text-red-500 mx-auto mb-4" />,
    },
    {
      title: "Safety & Security",
      description: "CCTV, ID check-in/out, and first aid for safety.",
      icon: <MdOutlineSecurity className="text-5xl text-yellow-500 mx-auto mb-4" />,
    },
    {
      title: "Hygienic Washrooms",
      description: "Child-friendly clean washrooms and routine cleaning.",
      icon: <MdOutlineBathroom className="text-5xl text-indigo-500 mx-auto mb-4" />,
    },
    {
      title: "Transport",
      description: "GPS-tracked school buses with trained staff.",
      icon: <MdDirectionsBus className="text-5xl text-amber-500 mx-auto mb-4" />,
    },
  ];

  return (
    <div className="wrapper px-4 sm:px-6 my-20">
      <h1 className="text-3xl font-bold text-center mb-10">Our School Facilities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            {facility.icon}
            <h2 className="text-xl font-semibold text-center mb-2">
              {facility.title}
            </h2>
            <p className="text-gray-600 text-center">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




