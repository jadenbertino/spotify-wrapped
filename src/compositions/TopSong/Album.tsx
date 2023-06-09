interface AlbumProps {
  size: number;
  cover: string;
}

export const Album = ({ size, cover }: AlbumProps) => {
	return (
		<div
			style={{
				width: size,
				height: size,
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.4)",
        borderRadius: "8px",
        overflow: "hidden",
			}}
		>
			<img src={cover} style={{
        width: size,
        height: size,
        objectFit: 'contain',
      }}/>
		</div>
	);
};