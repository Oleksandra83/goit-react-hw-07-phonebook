import { Oval } from 'react-loader-spinner';
import {LoaderContainer} from './Loader.styled'

const Loader = ({size, color, secondaryColor, strokeSize}) => {
	return (
		<LoaderContainer>
			<Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={strokeSize}
      strokeWidthSecondary={strokeSize}
    />
		</LoaderContainer>

  );
};

export { Loader };