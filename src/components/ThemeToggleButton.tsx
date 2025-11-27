import styled from "styled-components";

const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  display: none;

  &:checked + div {
    box-shadow: inset 32px -32px 0 0 ${({ theme }) => theme.colors.whiteColor};
    transform: scale(0.5) rotate(0deg);
    transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
  }

  &:checked + div::before {
    background: var(
      --color-toggle-light,
      ${({ theme }) => theme.colors.whiteColor}
    );
    transition: background 0.3s ease 0.1s;
  }

  &:checked + div::after {
    transform: scale(1.5);
    transition: transform 0.5s ease 0.15s;
  }
`;

const Icon = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: relative;
  box-shadow: inset 14px -14px 0 0 var(--color-toggle-dark, ${({ theme }) => theme.colors.whiteColor});
  transform: scale(1) rotate(-2deg);
  transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;

  &::before {
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.3s ease;
  }

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      0 23px 0
        var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      23px 0 0
        var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      -23px 0 0 var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      15px 15px 0
        var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      -15px 15px 0 var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      15px -15px 0 var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor}),
      -15px -15px 0
        var(--color-toggle-light, ${({ theme }) => theme.colors.whiteColor});
    transform: scale(0);
    transition: all 0.3s ease;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  text-shadow: ${({ theme }) => theme.colors.shadow};
`;

export default function ThemeToggleButton({
  themeLight,
  onChange,
}: {
  themeLight: boolean;
  onChange: () => void;
}) {
  return (
    <Label>
      <Input type="checkbox" onChange={onChange} />
      <Icon />
      <Text>{themeLight === true ? "Light" : "Dark"}</Text>
    </Label>
  );
}
