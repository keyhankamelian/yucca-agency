import Reveal from './Reveal';

type Plant = 'bloom' | 'joshua' | 'twin' | 'rock';

/** A yucca illustration in a section's side margin (wide screens only). */
export default function SidePlant({
  plant,
  side,
  flip = false,
}: {
  plant: Plant;
  side: 'left' | 'right';
  flip?: boolean;
}) {
  return (
    <Reveal className={`side-plant side-plant--${side}${flip ? ' side-plant--flip' : ''}`}>
      <img src={`/art/plant-${plant}.svg`} alt="" aria-hidden="true" />
    </Reveal>
  );
}
