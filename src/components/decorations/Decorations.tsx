import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PartyPopper,
  Home,
  ArrowLeft,
  Sparkles,
  Plus,
  Minus,
  ShoppingCart,
  CheckCircle,
  Send,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  User,
  MessageSquare,
  Eye,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Import decoration images
import heroImage from "../../assets/decoration-hero.jpg";
import lightsImage from "../../assets/item-lights.jpg";
import ribbonsImage from "../../assets/item-ribbons.jpg";
import flowersImage from "../../assets/item-flowers.jpg";
import candlesImage from "../../assets/item-candles.jpg";
import tablerunnerImage from "../../assets/item-tablerunner.jpg";
import bannerImage from "../../assets/item-banner.jpg";
import lanternsImage from "../../assets/item-lanterns.jpg";
import giftwrapImage from "../../assets/item-giftwrap.jpg";
import Navbar from "../Navbar";

interface DecorationItem {
  id: number;
  name: string;
  description: string;
  retailPrice: number;
  retailOriginal: number;
  wholesalePrice: number;
  minWholesaleUnits: number;
  image: string;
  category: string;
  inStock: boolean;
  savings: number;
}

const decorationItems: DecorationItem[] = [
  {
    id: 1,
    name: "Fairy String Lights",
    description: "Warm white LED lights for magical ambiance",
    retailPrice: 299,
    retailOriginal: 399,
    wholesalePrice: 199,
    minWholesaleUnits: 10,
    image: lightsImage,
    category: "Lighting",
    inStock: true,
    savings: 100,
  },
  {
    id: 2,
    name: "Silk Ribbon Bows",
    description: "Elegant pastel pink satin ribbon decorations",
    retailPrice: 149,
    retailOriginal: 199,
    wholesalePrice: 99,
    minWholesaleUnits: 20,
    image: ribbonsImage,
    category: "Ribbons",
    inStock: true,
    savings: 50,
  },
  {
    id: 3,
    name: "Rose Flower Arrangement",
    description: "Fresh pink & cream roses centerpiece",
    retailPrice: 599,
    retailOriginal: 799,
    wholesalePrice: 449,
    minWholesaleUnits: 5,
    image: flowersImage,
    category: "Flowers",
    inStock: true,
    savings: 150,
  },
  {
    id: 4,
    name: "Decorative Candle Set",
    description: "Glass holder candles in warm ivory",
    retailPrice: 399,
    retailOriginal: 499,
    wholesalePrice: 299,
    minWholesaleUnits: 10,
    image: candlesImage,
    category: "Candles",
    inStock: true,
    savings: 100,
  },
  {
    id: 5,
    name: "Elegant Table Runner",
    description: "Pink runner with gold trim accent",
    retailPrice: 249,
    retailOriginal: 349,
    wholesalePrice: 179,
    minWholesaleUnits: 15,
    image: tablerunnerImage,
    category: "Table Decor",
    inStock: true,
    savings: 70,
  },
  {
    id: 6,
    name: "Gold Letter Banner",
    description: "HAPPY BIRTHDAY garland in metallic gold",
    retailPrice: 199,
    retailOriginal: 279,
    wholesalePrice: 139,
    minWholesaleUnits: 20,
    image: bannerImage,
    category: "Banners",
    inStock: true,
    savings: 60,
  },
  {
    id: 7,
    name: "Paper Lantern Set",
    description: "Pastel colored hanging lanterns",
    retailPrice: 349,
    retailOriginal: 449,
    wholesalePrice: 249,
    minWholesaleUnits: 10,
    image: lanternsImage,
    category: "Hanging Decor",
    inStock: true,
    savings: 100,
  },
  {
    id: 8,
    name: "Gift Wrapping Kit",
    description: "Boxes, ribbons & tissue paper set",
    retailPrice: 449,
    retailOriginal: 599,
    wholesalePrice: 329,
    minWholesaleUnits: 8,
    image: giftwrapImage,
    category: "Gift Setup",
    inStock: true,
    savings: 120,
  },
];

type PriceType = "retail" | "wholesale";

interface CartItem {
  itemId: number;
  quantity: number;
  priceType: PriceType;
}

const Decorations = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPriceType, setSelectedPriceType] = useState<
    Map<number, PriceType>
  >(new Map());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const getPriceType = (itemId: number): PriceType => {
    return selectedPriceType.get(itemId) || "retail";
  };

  const setPriceTypeForItem = (itemId: number, type: PriceType) => {
    setSelectedPriceType((prev) => {
      const newMap = new Map(prev);
      newMap.set(itemId, type);
      return newMap;
    });
  };

  const getCartItem = (itemId: number) => cart.find((c) => c.itemId === itemId);

  const addToCart = (itemId: number) => {
    const priceType = getPriceType(itemId);
    const item = decorationItems.find((i) => i.id === itemId);
    if (!item) return;

    // For wholesale, enforce minimum quantity
    const minQty = priceType === "wholesale" ? item.minWholesaleUnits : 1;

    setCart((prev) => {
      const existing = prev.find((c) => c.itemId === itemId);
      if (existing) {
        return prev.map((c) =>
          c.itemId === itemId
            ? { ...c, quantity: c.quantity + 1, priceType }
            : c,
        );
      }
      return [...prev, { itemId, quantity: minQty, priceType }];
    });

    toast.success(`Added ${item.name} to cart!`);
  };

  const updateQuantity = (itemId: number, delta: number) => {
    const item = decorationItems.find((i) => i.id === itemId);
    const cartItem = getCartItem(itemId);
    if (!item || !cartItem) return;

    const minQty =
      cartItem.priceType === "wholesale" ? item.minWholesaleUnits : 1;

    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.itemId === itemId) {
            const newQty = Math.max(0, c.quantity + delta);
            if (newQty < minQty && newQty > 0) {
              toast.error(`Minimum ${minQty} units for wholesale`);
              return c;
            }
            return { ...c, quantity: newQty };
          }
          return c;
        })
        .filter((c) => c.quantity > 0);
    });
  };

  const getItemPrice = (item: DecorationItem, priceType: PriceType) => {
    return priceType === "wholesale" ? item.wholesalePrice : item.retailPrice;
  };

  const totalAmount = cart.reduce((sum, cartItem) => {
    const item = decorationItems.find((i) => i.id === cartItem.itemId);
    if (!item) return sum;
    return sum + getItemPrice(item, cartItem.priceType) * cartItem.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Please add at least one item to cart");
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.date
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Order submitted successfully! We'll contact you soon.");

    setCart([]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
   <Navbar/>

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Home decoration setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              Home{" "}
              <span className="text-gradient-festive">Decoration Setup</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Select your decorations • Retail & Wholesale prices available
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Decoration Items Grid */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                <Sparkles className="w-6 h-6 inline-block mr-2 text-primary" />
                Decoration Items
              </h2>
              <span className="text-sm text-muted-foreground">
                {decorationItems.length} items available
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {decorationItems.map((item, index) => {
                const cartItem = getCartItem(item.id);
                const isInCart = !!cartItem;
                const currentPriceType = getPriceType(item.id);

                return (
                  <div
                    key={item.id}
                    className={`group rounded-2xl overflow-hidden bg-card shadow-card border-2 transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                      isInCart
                        ? "border-primary shadow-glow"
                        : "border-transparent hover:border-primary/30"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-cream">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                          {item.category}
                        </span>
                      </div>
                      {isInCart && (
                        <div className="absolute top-3 right-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-glow">
                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Store className="w-3 h-3" />
                          <span>Party Perfect Store</span>
                        </div>
                      </div>

                      {/* Price Toggle */}
                      <div className="flex rounded-lg bg-muted p-1 gap-1">
                        <button
                          onClick={() => setPriceTypeForItem(item.id, "retail")}
                          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                            currentPriceType === "retail"
                              ? "bg-card shadow-sm text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Retail
                        </button>
                        <button
                          onClick={() =>
                            setPriceTypeForItem(item.id, "wholesale")
                          }
                          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                            currentPriceType === "wholesale"
                              ? "bg-card shadow-sm text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Wholesale
                        </button>
                      </div>

                      {/* Pricing Section */}
                      <div className="rounded-xl border border-border bg-secondary/30 divide-y divide-border">
                        {/* Retail Price Row */}
                        <div className="flex items-center justify-between p-3">
                          <span className="text-sm font-medium text-foreground">
                            Retail Price:
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary">
                              ₹{item.retailPrice}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.retailOriginal}
                            </span>
                          </div>
                        </div>

                        {/* Wholesale Price Row */}
                        <div className="flex items-center justify-between p-3">
                          <span className="text-sm font-medium text-foreground">
                            Wholesale Price:
                          </span>
                          <div className="text-right">
                            <span className="text-xl font-bold text-primary">
                              ₹{item.wholesalePrice}
                            </span>
                            <div className="text-xs text-muted-foreground">
                              Min. {item.minWholesaleUnits} units
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stock & Savings */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-semibold ${item.inStock ? "text-primary" : "text-destructive"}`}
                        >
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gold-light text-sm font-medium text-gold-dark">
                          Save ₹{item.savings} on bulk
                        </span>
                      </div>

                      {/* Cart Actions */}
                      {isInCart ? (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 flex items-center justify-center gap-3 bg-muted rounded-xl py-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-bold text-lg">
                              {cartItem.quantity}
                            </span>
                            <Button
                              //   variant="festive"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Button
                            // variant="festive"
                            className="flex-1"
                            onClick={() => addToCart(item.id)}
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="outline"
                            className="px-4 border-gold text-gold hover:bg-gold hover:text-foreground"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Order Summary */}
              <div className="rounded-2xl bg-card shadow-card border border-border p-6 space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  Cart Summary
                </h3>

                {cart.length > 0 ? (
                  <>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {cart.map((cartItem) => {
                        const item = decorationItems.find(
                          (i) => i.id === cartItem.itemId,
                        );
                        if (!item) return null;
                        const price = getItemPrice(item, cartItem.priceType);

                        return (
                          <div
                            key={cartItem.itemId}
                            className="flex items-start justify-between text-sm gap-2"
                          >
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {cartItem.priceType === "wholesale"
                                  ? "Wholesale"
                                  : "Retail"}{" "}
                                × {cartItem.quantity}
                              </div>
                            </div>
                            <span className="font-semibold">
                              ₹{(price * cartItem.quantity).toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Setup Fee</span>
                        <span className="font-medium">₹500</span>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-lg">
                        <span className="font-semibold">Total Amount</span>
                        <span className="font-bold text-gradient-festive">
                          ₹{(totalAmount + 500).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>Your cart is empty</p>
                    <p className="text-sm">
                      Add items to your decoration setup
                    </p>
                  </div>
                )}
              </div>

              {/* Booking Form */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-card shadow-card border border-border p-6 space-y-5"
              >
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Book Your Setup
                </h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      Delivery Address *
                    </Label>
                    <Input
                      id="address"
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            date: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            time: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      Special Instructions
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requests or decoration preferences..."
                      className="resize-none"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          notes: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  //   variant="festive"
                  size="lg"
                  className="w-full"
                  disabled={cart.length === 0}
                >
                  <Send className="w-4 h-4" />
                  Submit Order
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Our team will contact you within 24 hours to confirm your
                  order
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 BirthdayBliss. Making celebrations magical.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Decorations;
