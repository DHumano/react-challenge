import Filter from './Filter';
import * as S from './Styled';
import {
  sectionValues,
  windowsValues,
  sortValues
} from '../../helpers/valuesHelper';

const Filters = (filters) => {
  const { section, windows, sort, handleSection, handleWindows, handleSort } =
    filters;

  return (
    <S.Wrapper>
      <Filter
        type="section"
        valueTypes={sectionValues}
        handleValue={handleSection}
        value={section}
      />
      <Filter
        type="windows"
        valueTypes={windowsValues}
        handleValue={handleWindows}
        value={windows}
      />
      <Filter
        type="sort"
        valueTypes={sortValues}
        handleValue={handleSort}
        value={sort}
      />
    </S.Wrapper>
  );
};

export default Filters;
