import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Race', 'Simulator', 'Open world'],
        price: 54,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description:
            "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars. Begin Your Horizon Adventure today and add to your Wishlist!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 49,
        id: 2,
        description:
            'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.',
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Deep plot', 'Protagonist'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 49,
        id: 3,
        description:
            'Life is Strange: True Colors is a narrative adventure featuring Alex Chen, a young woman with an astonishing supernatural power, through which she can experience the strong emotions of others.',
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Open world', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 55,
        id: 4,
        description:
            'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: "Tom Clancy's Rainbow Six® Siege",
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tactics', 'Shooter'],
        price: 60,
        id: 5,
        description:
            "Face intense close quarters combat, high lethality, tactical decision making, team play and explosive action within every moment. Experience a new era of fierce firefights and expert strategy born from the rich legacy of past Tom Clancy's Rainbow Six games.",
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin\'s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open world'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 89,
        id: 6,
        description:
            'Assassin\'s Creed Valhalla - Become Eivor, a mighty Viking raider and lead your clan from the harsh shores of Norway to a new home amid the lush farmlands of ninth-century England. Explore a beautiful, mysterious open world where you\'ll face brutal enemies, raid fortresses, build your clan\'s new settlement, and forge alliances to win glory and earn a place in Valhalla.',
    },
];

export const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES.map((game) => (
                <GameItem game={game} key={game.id} />
            ))}
        </div>
    );
};
