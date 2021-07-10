import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/lucas2.jpeg'
          alt='Uma imagem mostrando o Lucas'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Lucas</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
