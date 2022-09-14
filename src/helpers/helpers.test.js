import { buildGamePlayers } from "./buildGamePlayer";
import { sortHands } from "./sortHands";
import Card from '../card/Card';
import Player from "../player/Player";

/**
 * @summary test suite for the helper functions
 */
describe('Helper Functions', () => {
    /**
     * @summary test to verify that the buildGamePlayers function works
     */
    it('can build game players', () => {
        // arrange
        const hands = [
            [
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='spades'
                    value='10'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='clubs'
                    value='10'
                />
            ],
            [
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='diamonds'
                    value='10'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='hearts'
                    value='10'
                />
            ],
        ];
        const players = [
            {
                name: 'waders',
                team: '1',
            },
            {
                name: 'frankie',
                team: '2',
            },
        ];
        const expected = [
            <Player
                key={0}
                hand={hands[0]}
                id={0}
                player={players[0]}
                privatePlayer
            />,
            <Player
                key={1}
                hand={hands[1]}
                id={1}
                player={players[1]}
                privatePlayer
            />,
        ]

        // act
        const result = buildGamePlayers(players, hands);

        //assert
        expect(result).toStrictEqual(expected);
    });

    /**
     * @summary test to verify that the sortHands function works
     */
    it('can sort hands by suit and rank', () => {
        // arrange
        const hands = [
            [
                <Card
                    frontImage='path/to/img'
                    rank={10}
                    suit='spades'
                    value='10'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='spades'
                    value='King'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={2}
                    suit='clubs'
                    value='2'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={6}
                    suit='clubs'
                    value='6'
                />
            ],
            [
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='diamonds'
                    value='Ace'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={11}
                    suit='diamonds'
                    value='Jack'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={12}
                    suit='diamonds'
                    value='Queen'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='diamonds'
                    value='King'
                />
            ],
        ];
        const expected = [
            [
                <Card
                    frontImage='path/to/img'
                    rank={6}
                    suit='clubs'
                    value='6'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={2}
                    suit='clubs'
                    value='2'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='spades'
                    value='King'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={10}
                    suit='spades'
                    value='10'
                />
            ],
            [
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='diamonds'
                    value='Ace'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={13}
                    suit='diamonds'
                    value='King'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={12}
                    suit='diamonds'
                    value='Queen'
                />,
                <Card
                    frontImage='path/to/img'
                    rank={11}
                    suit='diamonds'
                    value='Jack'
                />
            ],
        ];

        // act
        const result = sortHands(hands);

        //assert
        expect(result).toStrictEqual(expected);
    });
    // test('renders a team component', () => {
    //     render(<Game />);
    //     const button = screen.getAllByRole('button');
    //     fireEvent.click(button[0]);
    //     expect(screen.getByRole('listitem')).toBeInTheDocument();
    // });
});
