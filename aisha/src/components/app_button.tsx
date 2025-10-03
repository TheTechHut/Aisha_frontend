interface AppButtonProps {   
  label: string;
  onClick: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  customStyles?: React.CSSProperties;
}

export const AppButton = ({ 
  label,
  onClick, 
  disabled = false,
  backgroundColor = '#2c48a7ff',
  fontColor = '#d3da98ff',
  borderRadius = '9999px',
  padding = '10px 20px',
  fontSize = '16px',
  customStyles = {}
}: AppButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding,
        fontSize,
        color: fontColor,
        borderRadius,
        backgroundColor,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s ease',
        ...customStyles
      }}
    >
      {label}
    </button>
  );
};

export default AppButton;
