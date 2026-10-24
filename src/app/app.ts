import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';
import { Auto } from './auto';

@Component({
  selector: 'app-root',
  imports: [HeadBar, SearchBar, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  autoList: Auto[] = [
    {
      id: 1,
      brand: "Mercedes Benz",
      model: "C-CLASS",
      price: 230,
      power: 9,
      photo: "CLASS-C.webp",
      availability: 4,
      description: "The Mercedes-Benz C-Class is a line of luxury compact executive cars, known for blending sporty exterior styling with a sophisticated, high-tech interior. It features advanced technology like a digital cockpit, and many models include a mild hybrid system for efficiency and boost."
    },
    {
      id: 2,
      brand: "Mercedes Benz",
      model: "GLA",
      price: 203,
      power: 8,
      photo: "GLA.webp",
      availability: 4,
      description: "The Mercedes-Benz GLA is a compact luxury SUV, based on the A-Class platform, available with petrol and diesel engines, in front-wheel drive or all-wheel drive (4MATIC). It is characterized by modern technologies, innovative driver assistance systems, an enhanced design and high level of comfort, making it the smallest SUV in the brand's lineup."
    },
    {
      id: 3,
      brand: "Mercedes Benz",
      model: "GLE",
      price: 450,
      power: 17,
      photo: "GLE.webp",
      availability: 4,
      description: "The Mercedes-Benz GLE is a luxury SUV known for its combination of sportiness and luxurious comfort, available in several versions, including hybrid models and high-performance 'Mercedes-AMG' versions. The vehicle is distinguished by its spacious and luxurious interior, intelligent technology, and driver-focused design."
    },
    {
      id: 4,
      brand: "Jaguar",
      model: "F-Pace",
      price: 399,
      power: 16,
      photo: "FPACE.png",
      availability: 4,
      description: "The Jaguar F-PACE is a luxury SUV that blends performance and design, featuring a refreshed exterior including new headlights, a redesigned grille, and more dynamic exterior finishes. The interior has been reimagined to be luxurious and spacious, equipped with the Pivi Pro infotainment system with a large 11.4-inch touchscreen."
    },
    {
      id: 5,
      brand: "Jaguar",
      model: "E-PACE",
      price: 350,
      power: 12,
      photo: "EPACE.png",
      availability: 4,
      description: "The Jaguar E-PACE is a compact luxury SUV that combines sporty design with modern technology. It features a driver-focused interior, an 11.4-inch infotainment screen, plug-in hybrid powertrains, and personalization options such as the R-Dynamic trim."
    },
    {
      id: 6,
      brand: "Audi",
      model: "Q3 CROSSBACK",
      price: 230,
      power: 9,
      photo: "Q3.png",
      availability: 3,
      description: "The Audi Q3 Sportback is a compact SUV with a coupé-like design that combines sporty style and versatility. It stands out with its dynamic silhouette, modern and technologically advanced interior, as well as its spacious cabin and modular trunk."
    },
    {
      id: 7,
      brand: "Audi",
      model: "Q5",
      price: 350,
      power: 16,
      photo: "Q5.webp",
      availability: 3,
      description: "The Audi Q5 is a luxury SUV that combines performance, technology, and comfort. It features a turbocharged engine, quattro all-wheel drive, and several powertrain options, including mild-hybrid diesel and gasoline versions."
    },
    {
      id: 8,
      brand: "Audi",
      model: "A3 SPORTBACK",
      price: 145,
      power: 8,
      photo: "A3.webp",
      availability: 3,
      description: "The Audi A3 Sportback is a compact car distinguished by its sporty design and modern technology. It offers a versatile interior, a modular trunk, and a range of high-performance engines, both internal combustion and plug-in hybrid."
    },
    {
      id: 9,
      brand: "BMW",
      model: "X2 SDRIVE PACK",
      price: 245,
      power: 8,
      photo: "X2.png",
      availability: 3,
      description: "The BMW X2 sDrive pack describes a front-wheel-drive model that typically includes a Sporty M Sport design and is often paired with a 'Tech/Pro Pack'. Features include an M Sport brake system, M Adaptive Suspension, Adaptive LED Headlights, Parking Assistant, and Heated Sport Seats."
    },
    {
      id: 10,
      brand: "BMW",
      model: "IX",
      price: 432,
      power: 11,
      photo: "IX.png",
      availability: 3,
      description: "The BMW iX is a fully electric luxury SUV characterized by its futuristic design, minimalist yet spacious interior, and advanced technology. It offers a long electric range, semi-autonomous driving, and exceptional comfort."
    },
    {
      id: 11,
      brand: "BMW",
      model: "X3 HYBRIDE",
      price: 355,
      power: 11,
      photo: "X3.png",
      availability: 3,
      description: "The BMW X3 plug-in hybrid is a family SUV combining a 2.0L gasoline engine with an electric motor, delivering a combined output of approximately 299 horsepower and an electric range of up to 90 km, with a luxurious interior featuring the BMW Curved Display."
    },
    {
      id: 12,
      brand: "Land Rover",
      model: "Range Rover Evoque",
      price: 340,
      power: 9,
      photo: "EVOQUE.webp",
      availability: 4,
      description: "The Range Rover Evoque is a compact luxury SUV distinguished by its modern design, clean lines inspired by Range Rover DNA, and sophisticated interior. It offers plug-in hybrid (PHEV) powertrains with an electric range of up to 61 km."
    },
    {
      id: 13,
      brand: "Land Rover",
      model: "Defender 90",
      price: 398,
      power: 21,
      photo: "DEFENDER.png",
      availability: 4,
      description: "The Land Rover Defender 90 is a compact off-road vehicle, renowned for its iconic design, small proportions, and off-road capabilities, with impressive ground clearance and optional equipment like an electric winch."
    },
    {
      id: 14,
      brand: "Land Rover",
      model: "Range Rover",
      price: 702,
      power: 24,
      photo: "RANGE.png",
      availability: 4,
      description: "The Land Rover Range Rover is a luxury crossover SUV known for its combination of luxury, performance, and off-road capability, with a refined interior and advanced technology."
    },
    {
      id: 15,
      brand: "Alfa Romeo",
      model: "Stelvio",
      price: 268,
      power: 18,
      photo: "STELVIO.png",
      availability: 11,
      description: "The Alfa Romeo Stelvio is a sporty and elegant SUV, characterized by its distinctive Italian design, dynamic performance, and optimal weight distribution, with premium finishes and a large 525-liter trunk."
    },
    {
      id: 16,
      brand: "Alfa Romeo",
      model: "Giulia",
      price: 198,
      power: 18,
      photo: "GIULIA.png",
      availability: 11,
      description: "The Alfa Romeo Giulia is a premium sports sedan renowned for its elegant design, dynamic performance, and advanced technology, with a customizable 12.3-inch digital instrument cluster and an 8.8-inch touchscreen."
    }
  ];

  selectedAuto?: Auto;

  updateAuto(auto: Auto) {
    this.selectedAuto = auto;
  }

  closeDetails() {
    this.selectedAuto = undefined;
  }
}