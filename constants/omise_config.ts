import Omise from "omise-react-native";
import { OMISE_PUBLIC_KEY, OMIST_SECRET_KEY } from "@env";

Omise.config(OMISE_PUBLIC_KEY, OMIST_SECRET_KEY, '2017-11-12');

export default Omise;
