const Footer: React.FC = () => {
  return (
    <div className="leading-lg text-center font-medium text-[#776e65]">
      <h2 className="my-5 text-4xl underline">How to play?</h2>
      <p className="md:text-md text-sm">
        Use your <strong>arrow keys ( &larr; &uarr; &darr; &rarr; )</strong> to
        move the tiles. <br />
        If you are playing on a mobile device, you can also swipe to move the
        tiles.
        <br />
        When two tiles with the same number touch, they{' '}
        <strong>merge into one!</strong> <br />
        Goal is to get a tile with the number <strong>512</strong>.
      </p>

    </div>
  );
};

export default Footer;