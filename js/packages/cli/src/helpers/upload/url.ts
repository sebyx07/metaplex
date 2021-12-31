export default function urlUpload(
  manifestBuffer: Buffer,
) {
  const json = JSON.parse(manifestBuffer.toString('utf8'));

  return [json.metadataUrl, json.image];
}
