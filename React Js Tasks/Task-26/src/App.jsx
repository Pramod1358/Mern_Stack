import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black min-h-screen">

      <h1 className="text-center text-3xl font-bold text-amber-50  justify-center">
        All cards are here
      </h1>

      <div className="m-[30px] grid grid-cols-3">

        <Card
          image="https://picsum.photos/seed/card1/600/400"
          cardNumber="Card 1"
          description="Card 1 description"
        />

        <Card
          image="https://picsum.photos/seed/card2/600/400"
          cardNumber="Card 2"
          description="Card 2 description"
        />

        <Card
          image="https://picsum.photos/seed/card3/600/400"
          cardNumber="Card 3"
          description="Card 3 description"
        />

        <Card
          image="https://picsum.photos/seed/card4/600/400"
          cardNumber="Card 4"
          description="Card 4 description"
        />

        <Card
          image="https://picsum.photos/seed/card5/600/400"
          cardNumber="Card 5"
          description="Card 5 description"
        />

        <Card
          image="https://picsum.photos/seed/card6/600/400"
          cardNumber="Card 6"
          description="Card 6 description"
        />

        <Card
          image="https://picsum.photos/seed/card7/600/400"
          cardNumber="Card 7"
          description="Card 7 description"
        />

        <Card
          image="https://picsum.photos/seed/card8/600/400"
          cardNumber="Card 8"
          description="Card 8 description"
        />

        <Card
          image="https://picsum.photos/seed/card9/600/400"
          cardNumber="Card 9"
          description="Card 9 description"
        />

        <Card
          image="https://picsum.photos/seed/card10/600/400"
          cardNumber="Card 10"
          description="Card 10 description"
        />

        <Card
          image="https://picsum.photos/seed/card11/600/400"
          cardNumber="Card 11"
          description="Card 11 description"
        />

        <Card
          image="https://picsum.photos/seed/card12/600/400"
          cardNumber="Card 12"
          description="Card 12 description"
        />

        <Card
          image="https://picsum.photos/seed/card13/600/400"
          cardNumber="Card 13"
          description="Card 13 description"
        />

        <Card
          image="https://picsum.photos/seed/card14/600/400"
          cardNumber="Card 14"
          description="Card 14 description"
        />

        <Card
          image="https://picsum.photos/seed/card15/600/400"
          cardNumber="Card 15"
          description="Card 15 description"
        />

        <Card
          image="https://picsum.photos/seed/card16/600/400"
          cardNumber="Card 16"
          description="Card 16 description"
        />

        <Card
          image="https://picsum.photos/seed/card17/600/400"
          cardNumber="Card 17"
          description="Card 17 description"
        />

        <Card
          image="https://picsum.photos/seed/card18/600/400"
          cardNumber="Card 18"
          description="Card 18 description"
        />

      </div>

    </div>
  )
}

export default App