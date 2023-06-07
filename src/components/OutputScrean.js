import PropTypes from 'prop-types';

const Output = (calcState) => {
  if (calcState.next === null) {
    return calcState.total;
  }

  return calcState.next;
};

const OutputScreen = (props) => {
  const { calcState } = props;
  return (
    <section id="output-screen">
      <section id="output-screen" />
      <p>
        {' '}
        <output>
          {' '}
          {Output(calcState)}
        </output>
      </p>
    </section>
  );
};

OutputScreen.propTypes = {
  calcState: PropTypes.shape({
    next: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default OutputScreen;
