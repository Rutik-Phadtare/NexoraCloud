import NexoraCloudLogo from "../../assets/nexoracloudlogo.png";

export default function Logo({ compact = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={NexoraCloudLogo}
        alt="Nexora Cloud Technologies Logo"
        className="h-[40px] w-[40px] object-contain"
        draggable="false"
      />

      {!compact && (
        <span className="font-display text-[17px] font-extrabold leading-none tracking-tight">
          <span className="text-sky">Nexora</span>
          <span className="text-white">Cloud</span>
        </span>
      )}
    </span>
  );
}