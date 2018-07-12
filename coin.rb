def min_coins(cents)
    used = {}
    q_count = 0; d_count = 0; n_count = 0; p_count = 0
    coins = {:quarter => 25, :dime => 10, :nickel => 5, :penny => 1}
    until cents == 0
        if cents >= coins[:quarter]
            cents -= coins[:quarter]
            q_count += 1
            used.store(:quarter, q_count)
        elsif cents >= coins[:dime]
            cents -= coins[:dime]
            d_count += 1
            used.store(:dime, d_count)
        elsif cents >= coins[:nickel]
            cents -= coins[:nickel]
            n_count += 1
            used.store(:nickel, n_count)
        elsif cents >= coins[:penny]
            cents -= coins[:penny]
            p_count += 1
            used.store(:penny, p_count)
        end
    end
    used
end