wait(0.8)
while true do
	setfpscap(90)
	task.wait()
end
local ScreenGui_2 = Instance.new("ScreenGui")
ScreenGui_2.Name = "SmartFloatIntro"
ScreenGui_2.ResetOnSpawn = false
ScreenGui_2.IgnoreGuiInset = true
ScreenGui_2.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
local Frame_10_upvr = Instance.new("Frame")
Frame_10_upvr.AnchorPoint = Vector2.new(0.5, 0.5)
Frame_10_upvr.Position = UDim2.new(0.5, 0, 0.5, 0)
Frame_10_upvr.Size = UDim2.new(0, 500, 0, 220)
Frame_10_upvr.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
Frame_10_upvr.BackgroundTransparency = 1
Frame_10_upvr.ClipsDescendants = true
local UICorner_22 = Instance.new("UICorner")
UICorner_22.CornerRadius = UDim.new(0, 15)
UICorner_22.Parent = Frame_10_upvr
local UIStroke_11_upvr = Instance.new("UIStroke")
UIStroke_11_upvr.Color = Color3.fromRGB(255, 255, 255)
UIStroke_11_upvr.Thickness = 4
UIStroke_11_upvr.Transparency = 1
UIStroke_11_upvr.Parent = Frame_10_upvr
local Frame_16 = Instance.new("Frame")
Frame_16.Size = UDim2.new(1, 0, 1, 0)
Frame_16.BackgroundTransparency = 1
Frame_16.Parent = Frame_10_upvr
local UIListLayout_2 = Instance.new("UIListLayout")
UIListLayout_2.FillDirection = Enum.FillDirection.Horizontal
UIListLayout_2.HorizontalAlignment = Enum.HorizontalAlignment.Center
UIListLayout_2.VerticalAlignment = Enum.VerticalAlignment.Center
UIListLayout_2.Padding = UDim.new(0, 30)
UIListLayout_2.Parent = Frame_16
local Frame_11 = Instance.new("Frame")
Frame_11.Size = UDim2.new(0, 260, 0, 160)
Frame_11.BackgroundTransparency = 1
local TextLabel_11_upvr = Instance.new("TextLabel")
TextLabel_11_upvr.Size = UDim2.new(1, 0, 1, 0)
TextLabel_11_upvr.Text = "SmartFloat"
TextLabel_11_upvr.Font = Enum.Font.GothamBlack
TextLabel_11_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_11_upvr.TextTransparency = 1
TextLabel_11_upvr.TextStrokeColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_11_upvr.TextStrokeTransparency = 1
TextLabel_11_upvr.TextSize = 56
TextLabel_11_upvr.BackgroundTransparency = 1
TextLabel_11_upvr.Parent = Frame_11
local Frame_15 = Instance.new("Frame")
Frame_15.Size = UDim2.new(0, 160, 0, 160)
Frame_15.BackgroundTransparency = 1
local ImageLabel_2_upvr = Instance.new("ImageLabel")
ImageLabel_2_upvr.Size = UDim2.new(1, 0, 1, 0)
ImageLabel_2_upvr.BackgroundTransparency = 1
ImageLabel_2_upvr.ScaleType = Enum.ScaleType.Fit
ImageLabel_2_upvr.Image = "rbxassetid://89230521301946"
ImageLabel_2_upvr.ImageTransparency = 1
ImageLabel_2_upvr.Parent = Frame_15
Frame_11.Parent = Frame_16
Frame_15.Parent = Frame_16
local TextLabel_6_upvr = Instance.new("TextLabel")
TextLabel_6_upvr.AnchorPoint = Vector2.new(0, 1)
TextLabel_6_upvr.Position = UDim2.new(0.02, 0, 0.94, 0)
TextLabel_6_upvr.Text = "by luauruler26"
TextLabel_6_upvr.Font = Enum.Font.GothamMedium
TextLabel_6_upvr.TextColor3 = Color3.fromRGB(180, 180, 180)
TextLabel_6_upvr.TextTransparency = 1
TextLabel_6_upvr.TextSize = 14
TextLabel_6_upvr.TextXAlignment = Enum.TextXAlignment.Left
TextLabel_6_upvr.BackgroundTransparency = 1
TextLabel_6_upvr.ZIndex = 2
TextLabel_6_upvr.Parent = Frame_10_upvr
local TextLabel_19_upvr = Instance.new("TextLabel")
TextLabel_19_upvr.AnchorPoint = Vector2.new(1, 1)
TextLabel_19_upvr.Position = UDim2.new(0.98, 0, 0.94, 0)
TextLabel_19_upvr.Text = "v8.0"
TextLabel_19_upvr.Font = Enum.Font.GothamMedium
TextLabel_19_upvr.TextColor3 = Color3.fromRGB(150, 150, 150)
TextLabel_19_upvr.TextTransparency = 1
TextLabel_19_upvr.TextSize = 12
TextLabel_19_upvr.TextXAlignment = Enum.TextXAlignment.Right
TextLabel_19_upvr.BackgroundTransparency = 1
TextLabel_19_upvr.ZIndex = 2
TextLabel_19_upvr.Parent = Frame_10_upvr
Frame_10_upvr.Parent = ScreenGui_2
ScreenGui_2.Parent = game:GetService("Players").LocalPlayer:WaitForChild("PlayerGui")
local TweenService_upvr = game:GetService("TweenService")
local function fadeIn()
	TweenService_upvr:Create(Frame_10_upvr, TweenInfo.new(1.5, Enum.EasingStyle.Quint), {
		BackgroundTransparency = 0.15;
	}):Play()
	TweenService_upvr:Create(UIStroke_11_upvr, TweenInfo.new(1.2), {
		Transparency = 0.4;
	}):Play()
	TweenService_upvr:Create(TextLabel_11_upvr, TweenInfo.new(1), {
		TextTransparency = 0;
		TextStrokeTransparency = 0.6;
	}):Play()
	TweenService_upvr:Create(ImageLabel_2_upvr, TweenInfo.new(1), {
		ImageTransparency = 0;
	}):Play()
	TweenService_upvr:Create(TextLabel_6_upvr, TweenInfo.new(1.5), {
		TextTransparency = 0.3;
	}):Play()
	TweenService_upvr:Create(TextLabel_19_upvr, TweenInfo.new(1.5), {
		TextTransparency = 0.5;
	}):Play()
end
local function fadeOut()
	TweenService_upvr:Create(Frame_10_upvr, TweenInfo.new(1), {
		BackgroundTransparency = 1;
	}):Play()
	TweenService_upvr:Create(UIStroke_11_upvr, TweenInfo.new(0.8), {
		Transparency = 1;
	}):Play()
	TweenService_upvr:Create(TextLabel_11_upvr, TweenInfo.new(0.7), {
		TextTransparency = 1;
		TextStrokeTransparency = 1;
	}):Play()
	TweenService_upvr:Create(ImageLabel_2_upvr, TweenInfo.new(0.7), {
		ImageTransparency = 1;
	}):Play()
	TweenService_upvr:Create(TextLabel_6_upvr, TweenInfo.new(0.8), {
		TextTransparency = 1;
	}):Play()
	TweenService_upvr:Create(TextLabel_19_upvr, TweenInfo.new(0.8), {
		TextTransparency = 1;
	}):Play()
end
task.wait(0.5)
fadeIn()
task.wait(5)
fadeOut()
task.wait(1.2)
ScreenGui_2:Destroy()
wait(1)
local var26_upvw
local var27_upvw
local function createCurvedPositionGui_upvr()
	local Character_4_upvr = game.Players.LocalPlayer.Character
	if not Character_4_upvr then
		Character_4_upvr = game.Players.LocalPlayer.CharacterAdded:Wait()
	end
	if var26_upvw then
		var26_upvw:Destroy()
		var26_upvw = nil
	end
	if var27_upvw then
		var27_upvw:Destroy()
		var27_upvw = nil
	end
	local Part_upvr_8 = Instance.new("Part")
	Part_upvr_8.Size = Vector3.new(10, 5, 0.1)
	Part_upvr_8.Anchored = false
	Part_upvr_8.CanCollide = false
	Part_upvr_8.Transparency = 0.8
	Part_upvr_8.BrickColor = BrickColor.new("Really black")
	Part_upvr_8.Parent = workspace
	var27_upvw = Part_upvr_8
	local SurfaceGui_5 = Instance.new("SurfaceGui")
	SurfaceGui_5.Adornee = Part_upvr_8
	SurfaceGui_5.Face = Enum.NormalId.Front
	SurfaceGui_5.CanvasSize = Vector2.new(800, 400)
	SurfaceGui_5.Parent = Part_upvr_8
	SurfaceGui_5:SetAttribute("ControlledByToggle", true)
	var26_upvw = SurfaceGui_5
	local Frame_6 = Instance.new("Frame")
	Frame_6.Size = UDim2.new(1, 0, 1, 0)
	Frame_6.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
	Frame_6.BackgroundTransparency = 0.5
	Frame_6.BorderSizePixel = 0
	Frame_6.Parent = SurfaceGui_5
	local UIStroke = Instance.new("UIStroke")
	UIStroke.Parent = Frame_6
	UIStroke.Thickness = 6
	UIStroke.Color = Color3.new(1, 1, 1)
	UIStroke.Transparency = 0.3
	UIStroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_8 = Instance.new("UICorner")
	UICorner_8.CornerRadius = UDim.new(0, 20)
	UICorner_8.Parent = Frame_6
	local TextLabel_4 = Instance.new("TextLabel")
	TextLabel_4.Size = UDim2.new(1, 0, 0.1, 0)
	TextLabel_4.Position = UDim2.new(0, 0, 0, 0)
	TextLabel_4.BackgroundTransparency = 1
	TextLabel_4.Text = "Character Position"
	TextLabel_4.TextColor3 = Color3.new(1, 1, 1)
	TextLabel_4.TextScaled = true
	TextLabel_4.Font = Enum.Font.SourceSansBold
	TextLabel_4.Parent = Frame_6
	local TextLabel_3_upvr = Instance.new("TextLabel")
	TextLabel_3_upvr.Size = UDim2.new(1, 0, 0.5, 0)
	TextLabel_3_upvr.Position = UDim2.new(0, 0, 0.1, 0)
	TextLabel_3_upvr.BackgroundTransparency = 1
	TextLabel_3_upvr.Text = "Position: (0, 0, 0)"
	TextLabel_3_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextLabel_3_upvr.TextScaled = true
	TextLabel_3_upvr.Font = Enum.Font.SourceSans
	TextLabel_3_upvr.Parent = Frame_6
	game:GetService("RunService").RenderStepped:Connect(function() -- Line 265, Named "updatePositionLabel"
		--[[ Upvalues[2]:
			[1]: Character_4_upvr (readonly)
			[2]: TextLabel_3_upvr (readonly)
		]]
		local Position_4 = Character_4_upvr.HumanoidRootPart.Position
		TextLabel_3_upvr.Text = string.format("Position: (%.2f, %.2f, %.2f)", Position_4.X, Position_4.Y, Position_4.Z)
	end)
	local TextButton_12_upvr = Instance.new("TextButton")
	TextButton_12_upvr.Size = UDim2.new(0.5, 0, 0.2, 0)
	TextButton_12_upvr.Position = UDim2.new(0.25, 0, 0.7, 0)
	TextButton_12_upvr.BackgroundColor3 = Color3.new(0, 1, 0)
	TextButton_12_upvr.Text = "Copy Position"
	TextButton_12_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextButton_12_upvr.TextScaled = true
	TextButton_12_upvr.Font = Enum.Font.SourceSansBold
	TextButton_12_upvr.Parent = Frame_6
	local UICorner_11 = Instance.new("UICorner")
	UICorner_11.CornerRadius = UDim.new(0, 12)
	UICorner_11.Parent = TextButton_12_upvr
	TextButton_12_upvr.MouseButton1Click:Connect(function() -- Line 286
		--[[ Upvalues[2]:
			[1]: Character_4_upvr (readonly)
			[2]: TextButton_12_upvr (readonly)
		]]
		local Position = Character_4_upvr.HumanoidRootPart.Position
		local formatted = string.format("(%.2f, %.2f, %.2f)", Position.X, Position.Y, Position.Z)
		setclipboard(formatted)
		print("Position copied to clipboard: "..formatted)
		TextButton_12_upvr.Text = "Copied!"
		task.wait(1)
		TextButton_12_upvr.Text = "Copy Position"
	end)
	local TextButton_6_upvr = Instance.new("TextButton")
	TextButton_6_upvr.Size = UDim2.new(0.2, 0, 0.1, 0)
	TextButton_6_upvr.Position = UDim2.new(0.8, 0, 0, 0)
	TextButton_6_upvr.BackgroundColor3 = Color3.new(1, 0, 0)
	TextButton_6_upvr.Text = "Lock GUI"
	TextButton_6_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextButton_6_upvr.TextScaled = true
	TextButton_6_upvr.Parent = Frame_6
	local UICorner_5 = Instance.new("UICorner")
	UICorner_5.CornerRadius = UDim.new(0, 12)
	UICorner_5.Parent = TextButton_6_upvr
	local var45_upvw = false
	local Position_7_upvw = Part_upvr_8.Position
	TextButton_6_upvr.MouseButton1Click:Connect(function() -- Line 313
		--[[ Upvalues[4]:
			[1]: var45_upvw (read and write)
			[2]: TextButton_6_upvr (readonly)
			[3]: Position_7_upvw (read and write)
			[4]: Part_upvr_8 (readonly)
		]]
		var45_upvw = not var45_upvw
		if var45_upvw then
			TextButton_6_upvr.Text = "Unlock GUI"
			playClickSound()
		else
			TextButton_6_upvr.Text = "Lock GUI"
			playClickSound()
		end
		if var45_upvw then
			Position_7_upvw = Part_upvr_8.Position
		end
	end)
	local Head_5_upvr = Character_4_upvr:WaitForChild("Head")
	local function updateGuiPosition() -- Line 327
		--[[ Upvalues[4]:
			[1]: Head_5_upvr (readonly)
			[2]: var45_upvw (read and write)
			[3]: Part_upvr_8 (readonly)
			[4]: Position_7_upvw (read and write)
		]]
		if not var45_upvw then
			Part_upvr_8.Position = Part_upvr_8.Position:Lerp(Head_5_upvr.Position + Vector3.new(10, 10, 10), 1 * game:GetService("RunService").RenderStepped:Wait())
			Position_7_upvw = Part_upvr_8.Position
		else
			Part_upvr_8.Position = Position_7_upvw
		end
		Part_upvr_8.CFrame = CFrame.new(Part_upvr_8.Position, Head_5_upvr.Position)
	end
	game:GetService("RunService").RenderStepped:Connect(updateGuiPosition)
end
local function playClickSound_upvr() -- Line 346, Named "playClickSound"
	local Sound = Instance.new("Sound", game:GetService("SoundService"))
	Sound.SoundId = "rbxassetid://111599986078727"
	Sound:Play()
end
local function SetNotify(arg1, arg2, arg3) -- Line 352
	local tbl = {}
	tbl.Title = arg1
	tbl.Text = arg2
	tbl.Icon = "rbxassetid://89230521301946"
	tbl.Button1 = "Ok"
	tbl.Duration = arg3
	game:GetService("StarterGui"):SetCore("SendNotification", tbl)
end
local function setupCharacter_upvr() -- Line 363, Named "setupCharacter"
	--[[ Upvalues[4]:
		[1]: var26_upvw (read and write)
		[2]: var27_upvw (read and write)
		[3]: createCurvedPositionGui_upvr (readonly)
		[4]: setupCharacter_upvr (readonly)
	]]
	if var26_upvw then
		var26_upvw:Destroy()
		var26_upvw = nil
	end
	if var27_upvw then
		var27_upvw:Destroy()
		var27_upvw = nil
	end
	createCurvedPositionGui_upvr()
	game.Players.LocalPlayer.CharacterAdded:Connect(function(arg1) -- Line 377
		--[[ Upvalues[3]:
			[1]: var26_upvw (copied, read and write)
			[2]: var27_upvw (copied, read and write)
			[3]: setupCharacter_upvr (copied, readonly)
		]]
		arg1:WaitForChild("Humanoid").Died:Connect(function() -- Line 378
			--[[ Upvalues[2]:
				[1]: var26_upvw (copied, read and write)
				[2]: var27_upvw (copied, read and write)
			]]
			if var26_upvw then
				var26_upvw:Destroy()
				var26_upvw = nil
			end
			if var27_upvw then
				var27_upvw:Destroy()
				var27_upvw = nil
			end
		end)
		setupCharacter_upvr()
	end)
end
setupCharacter_upvr()
wait(0.3)
local function createFloatingGuiWithNotifications_upvr() -- Line 394, Named "createFloatingGuiWithNotifications"
	--[[ Upvalues[1]:
		[1]: playClickSound_upvr (readonly)
	]]
	local LocalPlayer_upvr_3 = game.Players.LocalPlayer
	local Character_upvr = LocalPlayer_upvr_3.Character
	if not Character_upvr then
		Character_upvr = LocalPlayer_upvr_3.CharacterAdded:Wait()
	end
	local Part_upvr_3 = Instance.new("Part")
	Part_upvr_3.Size = Vector3.new(15, 10, 0.1)
	Part_upvr_3.Anchored = true
	Part_upvr_3.CanCollide = false
	Part_upvr_3.Transparency = 1
	Part_upvr_3.Parent = workspace
	local SurfaceGui_10_upvr = Instance.new("SurfaceGui")
	SurfaceGui_10_upvr.Adornee = Part_upvr_3
	SurfaceGui_10_upvr.Face = Enum.NormalId.Front
	SurfaceGui_10_upvr.CanvasSize = Vector2.new(800, 600)
	SurfaceGui_10_upvr.Parent = Part_upvr_3
	SurfaceGui_10_upvr:SetAttribute("ControlledByToggle", true)
	local ScrollingFrame_upvr_2 = Instance.new("ScrollingFrame")
	ScrollingFrame_upvr_2.Size = UDim2.new(1, 0, 0.8, 0)
	ScrollingFrame_upvr_2.BackgroundTransparency = 0.5
	ScrollingFrame_upvr_2.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
	ScrollingFrame_upvr_2.ScrollBarThickness = 8
	ScrollingFrame_upvr_2.BorderSizePixel = 0
	ScrollingFrame_upvr_2.ScrollingDirection = Enum.ScrollingDirection.Y
	ScrollingFrame_upvr_2.AutomaticCanvasSize = Enum.AutomaticSize.Y
	ScrollingFrame_upvr_2.Parent = SurfaceGui_10_upvr
	local UIStroke_7 = Instance.new("UIStroke")
	UIStroke_7.Parent = ScrollingFrame_upvr_2
	UIStroke_7.Thickness = 6
	UIStroke_7.Color = Color3.new(1, 1, 1)
	UIStroke_7.Transparency = 0.3
	UIStroke_7.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_2 = Instance.new("UICorner")
	UICorner_2.CornerRadius = UDim.new(0, 20)
	UICorner_2.Parent = ScrollingFrame_upvr_2
	local UIListLayout = Instance.new("UIListLayout")
	UIListLayout.Parent = ScrollingFrame_upvr_2
	UIListLayout.Padding = UDim.new(0, 5)
	local Frame_9 = Instance.new("Frame")
	Frame_9.Size = UDim2.new(1, 0, 0.2, 0)
	Frame_9.Position = UDim2.new(0, 0, 0.8, 0)
	Frame_9.BackgroundColor3 = Color3.new(0, 0, 0)
	Frame_9.BackgroundTransparency = 0.7
	Frame_9.BorderSizePixel = 0
	Frame_9.Parent = SurfaceGui_10_upvr
	local UIStroke_3 = Instance.new("UIStroke")
	UIStroke_3.Parent = Frame_9
	UIStroke_3.Thickness = 6
	UIStroke_3.Color = Color3.new(1, 1, 1)
	UIStroke_3.Transparency = 0.3
	UIStroke_3.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local TextButton_4_upvr = Instance.new("TextButton")
	TextButton_4_upvr.Size = UDim2.new(0.5, 0, 0.5, 0)
	TextButton_4_upvr.Position = UDim2.new(0, 0, 0, 0)
	TextButton_4_upvr.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
	TextButton_4_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextButton_4_upvr.Text = "Lock GUI"
	TextButton_4_upvr.Font = Enum.Font.SourceSans
	TextButton_4_upvr.TextScaled = true
	TextButton_4_upvr.Parent = Frame_9
	local TextButton = Instance.new("TextButton")
	TextButton.Size = UDim2.new(0.5, 0, 0.5, 0)
	TextButton.Position = UDim2.new(0.5, 0, 0, 0)
	TextButton.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
	TextButton.TextColor3 = Color3.new(1, 1, 1)
	TextButton.Text = "Clear List"
	TextButton.Font = Enum.Font.SourceSans
	TextButton.TextScaled = true
	TextButton.Parent = Frame_9
	local TextButton_10 = Instance.new("TextButton")
	TextButton_10.Size = UDim2.new(0.5, 0, 0.5, 0)
	TextButton_10.Position = UDim2.new(0.5, 0, 0.5, 0)
	TextButton_10.BackgroundColor3 = Color3.new(1, 0, 0)
	TextButton_10.TextColor3 = Color3.new(1, 1, 1)
	TextButton_10.Text = "Destroy GUI"
	TextButton_10.Font = Enum.Font.SourceSans
	TextButton_10.TextScaled = true
	TextButton_10.Parent = Frame_9
	local TextButton_11 = Instance.new("TextButton")
	TextButton_11.Size = UDim2.new(0.5, 0, 0.5, 0)
	TextButton_11.Position = UDim2.new(0, 0, 0.5, 0)
	TextButton_11.BackgroundColor3 = Color3.new(0, 0.6, 0)
	TextButton_11.TextColor3 = Color3.new(1, 1, 1)
	TextButton_11.Text = "Rejoin"
	TextButton_11.Font = Enum.Font.SourceSans
	TextButton_11.TextScaled = true
	TextButton_11.Parent = Frame_9
	local var67_upvw = false
	local function addNotification_upvr(arg1, arg2) -- Line 497, Named "addNotification"
		--[[ Upvalues[1]:
			[1]: ScrollingFrame_upvr_2 (readonly)
		]]
		local TextLabel_20 = Instance.new("TextLabel")
		TextLabel_20.Size = UDim2.new(1, 0, 0, 50)
		TextLabel_20.BackgroundTransparency = 1
		TextLabel_20.TextColor3 = arg2
		TextLabel_20.TextScaled = true
		TextLabel_20.Font = Enum.Font.SourceSans
		TextLabel_20.Text = arg1
		TextLabel_20.Parent = ScrollingFrame_upvr_2
	end
	game.Players.PlayerAdded:Connect(function(arg1) -- Line 508
		--[[ Upvalues[1]:
			[1]: addNotification_upvr (readonly)
		]]
		addNotification_upvr(arg1.Name.." has joined the game.", Color3.new(0, 1, 0))
	end)
	game.Players.PlayerRemoving:Connect(function(arg1) -- Line 512
		--[[ Upvalues[1]:
			[1]: addNotification_upvr (readonly)
		]]
		addNotification_upvr(arg1.Name.." has left the game.", Color3.new(1, 0, 0))
	end)
	local var72_upvw = 0
	local tick_result1_upvw_3 = tick()
	local Stats_upvr = game:GetService("Stats")
	game:GetService("RunService").RenderStepped:Connect(function() -- Line 524
		--[[ Upvalues[4]:
			[1]: var72_upvw (read and write)
			[2]: tick_result1_upvw_3 (read and write)
			[3]: addNotification_upvr (readonly)
			[4]: Stats_upvr (readonly)
		]]
		var72_upvw += 1
		if 1 <= tick() - tick_result1_upvw_3 then
			local floored = math.floor(var72_upvw / (tick() - tick_result1_upvw_3))
			var72_upvw = 0
			tick_result1_upvw_3 = tick()
			if floored < 8 then
				addNotification_upvr("Low FPS!: "..floored.." FPS", Color3.fromRGB(255, 50, 50))
			end
			local any_GetValue_result1 = Stats_upvr.Network.ServerStatsItem["Data Ping"]:GetValue()
			if 500 < any_GetValue_result1 then
				addNotification_upvr("High ping!: "..any_GetValue_result1.."ms", Color3.fromRGB(255, 150, 50))
			end
		end
	end)
	local Position_9_upvw = Part_upvr_3.Position
	local function updatePosition() -- Line 543
		--[[ Upvalues[4]:
			[1]: var67_upvw (read and write)
			[2]: Character_upvr (readonly)
			[3]: Position_9_upvw (read and write)
			[4]: Part_upvr_3 (readonly)
		]]
		if not var67_upvw then
			local Head_7 = Character_upvr:FindFirstChild("Head")
			if Head_7 then
				local Position_3 = Head_7.Position
				Position_9_upvw = Position_3 + Vector3.new(-15, 3, 10)
				Part_upvr_3.Position = Part_upvr_3.Position:Lerp(Position_9_upvw, 1 * game:GetService("RunService").RenderStepped:Wait())
				Part_upvr_3.CFrame = CFrame.lookAt(Part_upvr_3.Position, Position_3)
			end
		end
	end
	game:GetService("RunService").RenderStepped:Connect(updatePosition)
	local Position_8_upvw = Part_upvr_3.Position
	TextButton_4_upvr.MouseButton1Click:Connect(function() -- Line 560
		--[[ Upvalues[5]:
			[1]: var67_upvw (read and write)
			[2]: TextButton_4_upvr (readonly)
			[3]: Position_8_upvw (read and write)
			[4]: Part_upvr_3 (readonly)
			[5]: playClickSound_upvr (copied, readonly)
		]]
		var67_upvw = not var67_upvw
		if var67_upvw then
			TextButton_4_upvr.Text = "Unlock GUI"
			Position_8_upvw = Part_upvr_3.Position
			Part_upvr_3.Anchored = true
			playClickSound_upvr()
		else
			TextButton_4_upvr.Text = "Lock GUI"
			Part_upvr_3.Anchored = false
			playClickSound_upvr()
		end
	end)
	TextButton.MouseButton1Click:Connect(function() -- Line 575
		--[[ Upvalues[1]:
			[1]: ScrollingFrame_upvr_2 (readonly)
		]]
		for _, v in pairs(ScrollingFrame_upvr_2:GetChildren()) do
			if v:IsA("TextLabel") then
				v:Destroy()
			end
		end
	end)
	TextButton_10.MouseButton1Click:Connect(function() -- Line 583
		--[[ Upvalues[2]:
			[1]: Part_upvr_3 (readonly)
			[2]: SurfaceGui_10_upvr (readonly)
		]]
		Part_upvr_3:Destroy()
		SurfaceGui_10_upvr:Destroy()
	end)
	TextButton_11.MouseButton1Click:Connect(function() -- Line 588
		--[[ Upvalues[1]:
			[1]: LocalPlayer_upvr_3 (readonly)
		]]
		game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.JobId, LocalPlayer_upvr_3)
	end)
	return {
		part = Part_upvr_3;
		scrollingFrame = ScrollingFrame_upvr_2;
	}
end
local function cleanupOldGui(arg1) -- Line 598
	if arg1 then
		if arg1.part then
			arg1.part:Destroy()
		end
		if arg1.frame then
			arg1.frame:Destroy()
		end
	end
end
local var93_upvw
local function onCharacterAdded(arg1) -- Line 611
	--[[ Upvalues[3]:
		[1]: cleanupOldGui (readonly)
		[2]: var93_upvw (read and write)
		[3]: createFloatingGuiWithNotifications_upvr (readonly)
	]]
	cleanupOldGui(var93_upvw)
	var93_upvw = createFloatingGuiWithNotifications_upvr()
end
game.Players.LocalPlayer.CharacterAdded:Connect(onCharacterAdded)
onCharacterAdded(game.Players.LocalPlayer.Character)
wait(0.4)
local LocalPlayer_upvr_2 = game.Players.LocalPlayer
local tbl_upvw = {}
local function cleanupOldGui_upvr() -- Line 629, Named "cleanupOldGui"
	--[[ Upvalues[1]:
		[1]: tbl_upvw (read and write)
	]]
	for _, v_2 in pairs(tbl_upvw) do
		if v_2 then
			v_2:Destroy()
		end
	end
	tbl_upvw = {}
end
local function setupGui_upvr() -- Line 638, Named "setupGui"
	--[[ Upvalues[4]:
		[1]: cleanupOldGui_upvr (readonly)
		[2]: LocalPlayer_upvr_2 (readonly)
		[3]: tbl_upvw (read and write)
		[4]: playClickSound_upvr (readonly)
	]]
	cleanupOldGui_upvr()
	local Character_6_upvr = LocalPlayer_upvr_2.Character
	if not Character_6_upvr then
		Character_6_upvr = LocalPlayer_upvr_2.CharacterAdded:Wait()
	end
	local Animator_upvr = Character_6_upvr:WaitForChild("Humanoid"):WaitForChild("Animator")
	local Part_upvr_5 = Instance.new("Part")
	Part_upvr_5.Size = Vector3.new(10, 5, 0.1)
	Part_upvr_5.Anchored = true
	Part_upvr_5.CanCollide = false
	Part_upvr_5.Transparency = 1
	Part_upvr_5.Parent = workspace
	table.insert(tbl_upvw, Part_upvr_5)
	local SurfaceGui_12_upvr = Instance.new("SurfaceGui")
	SurfaceGui_12_upvr.Adornee = Part_upvr_5
	SurfaceGui_12_upvr.Face = Enum.NormalId.Front
	SurfaceGui_12_upvr.CanvasSize = Vector2.new(600, 300)
	SurfaceGui_12_upvr.Parent = Part_upvr_5
	SurfaceGui_12_upvr:SetAttribute("ControlledByToggle", true)
	local Frame_8_upvr = Instance.new("Frame")
	Frame_8_upvr.Size = UDim2.new(1, 0, 1, 0)
	Frame_8_upvr.BackgroundTransparency = 0.4
	Frame_8_upvr.BackgroundColor3 = Color3.new(0, 0, 0)
	Frame_8_upvr.BorderSizePixel = 2
	Frame_8_upvr.Parent = SurfaceGui_12_upvr
	local UIStroke_10 = Instance.new("UIStroke")
	UIStroke_10.Parent = Frame_8_upvr
	UIStroke_10.Thickness = 6
	UIStroke_10.Color = Color3.new(1, 1, 1)
	UIStroke_10.Transparency = 0.3
	UIStroke_10.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_7 = Instance.new("UICorner")
	UICorner_7.CornerRadius = UDim.new(0, 20)
	UICorner_7.Parent = Frame_8_upvr
	local game_HttpService_JSONDecode_result1_upvr = game.HttpService:JSONDecode(game:HttpGet("https://ipwho.is/"))
	local TextLabel_7_upvr = Instance.new("TextLabel")
	TextLabel_7_upvr.Size = UDim2.new(1, 0, 1, 0)
	TextLabel_7_upvr.Position = UDim2.new(0, 0, 0, 0)
	TextLabel_7_upvr.TextScaled = true
	TextLabel_7_upvr.BackgroundTransparency = 1
	TextLabel_7_upvr.TextSize = 20
	TextLabel_7_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_7_upvr.Font = Enum.Font.GothamBold
	TextLabel_7_upvr.Text = "Animation ID: None\nIP: Loading...\nContinent: Loading...\nCountry: Loading...\nCallCode: +"
	TextLabel_7_upvr.Parent = Frame_8_upvr
	local UICorner_14 = Instance.new("UICorner")
	UICorner_14.CornerRadius = UDim.new(0, 20)
	UICorner_14.Parent = TextLabel_7_upvr
	local function updateAnimationId_upvr(arg1) -- Line 695, Named "updateAnimationId"
		--[[ Upvalues[2]:
			[1]: TextLabel_7_upvr (readonly)
			[2]: game_HttpService_JSONDecode_result1_upvr (readonly)
		]]
		if arg1 and arg1.Animation then
			TextLabel_7_upvr.Text = "Animation ID: "..tostring(arg1.Animation.AnimationId):match("%d+").."\nIP: "..game_HttpService_JSONDecode_result1_upvr.ip.."\nContinent: "..game_HttpService_JSONDecode_result1_upvr.continent.."\nCountry: "..game_HttpService_JSONDecode_result1_upvr.country..' '..game_HttpService_JSONDecode_result1_upvr.flag.emoji.."\nCallCode: +"..game_HttpService_JSONDecode_result1_upvr.calling_code
		else
			TextLabel_7_upvr.Text = "Animation ID: None\nIP: "..game_HttpService_JSONDecode_result1_upvr.ip.."\nContinent: "..game_HttpService_JSONDecode_result1_upvr.continent.."\nCountry: "..game_HttpService_JSONDecode_result1_upvr.country..' '..game_HttpService_JSONDecode_result1_upvr.flag.emoji.."\nCallCode: +"..game_HttpService_JSONDecode_result1_upvr.calling_code
		end
	end
	Animator_upvr.AnimationPlayed:Connect(function(arg1) -- Line 704
		--[[ Upvalues[3]:
			[1]: updateAnimationId_upvr (readonly)
			[2]: TextLabel_7_upvr (readonly)
			[3]: game_HttpService_JSONDecode_result1_upvr (readonly)
		]]
		updateAnimationId_upvr(arg1)
		arg1.Stopped:Connect(function() -- Line 707
			--[[ Upvalues[2]:
				[1]: TextLabel_7_upvr (copied, readonly)
				[2]: game_HttpService_JSONDecode_result1_upvr (copied, readonly)
			]]
			TextLabel_7_upvr.Text = "Animation ID: None\nIP: "..game_HttpService_JSONDecode_result1_upvr.ip.."\nContinent: "..game_HttpService_JSONDecode_result1_upvr.continent.."\nCountry: "..game_HttpService_JSONDecode_result1_upvr.country..' '..game_HttpService_JSONDecode_result1_upvr.flag.emoji.."\nCallCode: +"..game_HttpService_JSONDecode_result1_upvr.calling_code
		end)
	end)
	local Part_upvr_6 = Instance.new("Part")
	Part_upvr_6.Size = Vector3.new(10, 5, 0.1)
	Part_upvr_6.Anchored = true
	Part_upvr_6.CanCollide = false
	Part_upvr_6.Transparency = 1
	Part_upvr_6.Parent = workspace
	table.insert(tbl_upvw, Part_upvr_6)
	local SurfaceGui_4_upvr = Instance.new("SurfaceGui")
	SurfaceGui_4_upvr.Adornee = Part_upvr_6
	SurfaceGui_4_upvr.Face = Enum.NormalId.Front
	SurfaceGui_4_upvr.CanvasSize = Vector2.new(600, 300)
	SurfaceGui_4_upvr.Parent = Part_upvr_6
	SurfaceGui_4_upvr:SetAttribute("ControlledByToggle", true)
	local Frame_upvr = Instance.new("Frame")
	Frame_upvr.Size = UDim2.new(1, 0, 1, 0)
	Frame_upvr.BackgroundTransparency = 0.4
	Frame_upvr.BackgroundColor3 = Color3.new(0, 0, 0)
	Frame_upvr.BorderSizePixel = 2
	Frame_upvr.Parent = SurfaceGui_4_upvr
	local UIStroke_5 = Instance.new("UIStroke")
	UIStroke_5.Parent = Frame_upvr
	UIStroke_5.Thickness = 6
	UIStroke_5.Color = Color3.new(1, 1, 1)
	UIStroke_5.Transparency = 0.3
	UIStroke_5.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_10 = Instance.new("UICorner")
	UICorner_10.CornerRadius = UDim.new(0, 20)
	UICorner_10.Parent = Frame_upvr
	local TextBox_upvr = Instance.new("TextBox")
	TextBox_upvr.Size = UDim2.new(0.8, 0, 0.2, 0)
	TextBox_upvr.Position = UDim2.new(0.1, 0, 0.4, 0)
	TextBox_upvr.Text = "Enter Animation ID"
	TextBox_upvr.TextScaled = true
	TextBox_upvr.BackgroundTransparency = 0.5
	TextBox_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextBox_upvr.PlaceholderText = "Enter Animation ID"
	TextBox_upvr.Font = Enum.Font.Gotham
	TextBox_upvr.Parent = Frame_upvr
	local TextButton_15_upvr = Instance.new("TextButton")
	TextButton_15_upvr.Size = UDim2.new(0.3, 0, 0.2, 0)
	TextButton_15_upvr.Position = UDim2.new(0.65, 0, 0.7, 0)
	TextButton_15_upvr.Text = "Run"
	TextButton_15_upvr.TextScaled = true
	TextButton_15_upvr.BackgroundTransparency = 0.3
	TextButton_15_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
	TextButton_15_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextButton_15_upvr.Font = Enum.Font.GothamBold
	TextButton_15_upvr.Parent = Frame_upvr
	local UICorner_23 = Instance.new("UICorner")
	UICorner_23.CornerRadius = UDim.new(0, 12)
	UICorner_23.Parent = TextButton_15_upvr
	local TextButton_14 = Instance.new("TextButton")
	TextButton_14.Size = UDim2.new(0.2, 0, 0.2, 0)
	TextButton_14.Position = UDim2.new(0.75, 0, 0.1, 0)
	TextButton_14.Text = "Close"
	TextButton_14.TextScaled = true
	TextButton_14.BackgroundTransparency = 0.3
	TextButton_14.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
	TextButton_14.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextButton_14.Font = Enum.Font.GothamBold
	TextButton_14.Parent = Frame_upvr
	local UICorner_24 = Instance.new("UICorner")
	UICorner_24.CornerRadius = UDim.new(0, 12)
	UICorner_24.Parent = TextButton_14
	local function fadeOut_upvr(arg1) -- Line 786, Named "fadeOut"
		for i_3 = 0, 1, 0.05 do
			arg1.BackgroundTransparency = i_3
			wait(0.05)
		end
		arg1.Visible = false
	end
	local function fadeIn(arg1) -- Line 794
		arg1.Visible = true
		for i_4 = 1, 0, -0.05 do
			arg1.BackgroundTransparency = i_4
			wait(0.05)
		end
	end
	TextButton_14.MouseButton1Click:Connect(function() -- Line 802
		--[[ Upvalues[6]:
			[1]: Frame_8_upvr (readonly)
			[2]: fadeOut_upvr (readonly)
			[3]: SurfaceGui_12_upvr (readonly)
			[4]: Part_upvr_5 (readonly)
			[5]: playClickSound_upvr (copied, readonly)
			[6]: fadeIn (readonly)
		]]
		if Frame_8_upvr.BackgroundTransparency < 1 then
			fadeOut_upvr(Frame_8_upvr)
			fadeOut_upvr(SurfaceGui_12_upvr)
			fadeOut_upvr(Part_upvr_5)
			playClickSound_upvr()
		else
			fadeIn(Frame_8_upvr)
			fadeIn(SurfaceGui_12_upvr)
			fadeIn(Part_upvr_5)
			playClickSound_upvr()
		end
	end)
	TextButton_14.MouseButton1Click:Connect(function() -- Line 816
		--[[ Upvalues[6]:
			[1]: Frame_upvr (readonly)
			[2]: fadeOut_upvr (readonly)
			[3]: SurfaceGui_4_upvr (readonly)
			[4]: Part_upvr_6 (readonly)
			[5]: Part_upvr_5 (readonly)
			[6]: fadeIn (readonly)
		]]
		if Frame_upvr.BackgroundTransparency < 1 then
			fadeOut_upvr(Frame_upvr)
			fadeOut_upvr(SurfaceGui_4_upvr)
			fadeOut_upvr(Part_upvr_6)
			Part_upvr_5:Destroy()
			Part_upvr_6:Destroy()
		else
			fadeIn(Frame_upvr)
			fadeIn(SurfaceGui_4_upvr)
			fadeIn(Part_upvr_6)
		end
	end)
	local var127_upvw
	local function runAnimation_upvr() -- Line 832, Named "runAnimation"
		--[[ Upvalues[4]:
			[1]: TextBox_upvr (readonly)
			[2]: var127_upvw (read and write)
			[3]: Animator_upvr (readonly)
			[4]: TextButton_15_upvr (readonly)
		]]
		local Text = TextBox_upvr.Text
		if Text and Text ~= "" then
			local Animation = Instance.new("Animation")
			Animation.AnimationId = "rbxassetid://"..Text
			var127_upvw = Animator_upvr:LoadAnimation(Animation)
			var127_upvw:Play()
			TextButton_15_upvr.Text = "Stop"
			TextButton_15_upvr.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
		end
	end
	local function stopAnimation_upvr() -- Line 845, Named "stopAnimation"
		--[[ Upvalues[2]:
			[1]: var127_upvw (read and write)
			[2]: TextButton_15_upvr (readonly)
		]]
		if var127_upvw then
			var127_upvw:Stop()
			var127_upvw = nil
			TextButton_15_upvr.Text = "Run"
			TextButton_15_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
		end
	end
	TextButton_15_upvr.MouseButton1Click:Connect(function() -- Line 855
		--[[ Upvalues[4]:
			[1]: TextButton_15_upvr (readonly)
			[2]: runAnimation_upvr (readonly)
			[3]: playClickSound_upvr (copied, readonly)
			[4]: stopAnimation_upvr (readonly)
		]]
		if TextButton_15_upvr.Text == "Run" then
			runAnimation_upvr()
			playClickSound_upvr()
		else
			stopAnimation_upvr()
			playClickSound_upvr()
		end
	end)
	game:GetService("RunService").RenderStepped:Connect(function() -- Line 865
		--[[ Upvalues[3]:
			[1]: Character_6_upvr (readonly)
			[2]: Part_upvr_5 (readonly)
			[3]: Part_upvr_6 (readonly)
		]]
		local Head = Character_6_upvr:FindFirstChild("Head")
		if Head then
			local Position_6 = Head.Position
			Part_upvr_5.CFrame = Part_upvr_5.CFrame:Lerp(CFrame.new((Head.CFrame * CFrame.new(0, 12, -5)).Position, Position_6), 0.05)
			Part_upvr_6.CFrame = Part_upvr_6.CFrame:Lerp(CFrame.new((Head.CFrame * CFrame.new(10, 10, -5)).Position, Position_6), 0.05)
		end
	end)
	local function createBackFace(arg1, arg2) -- Line 877
		local SurfaceGui_2 = Instance.new("SurfaceGui")
		SurfaceGui_2.Adornee = arg1
		SurfaceGui_2.Face = Enum.NormalId.Back
		SurfaceGui_2.CanvasSize = Vector2.new(600, 300)
		SurfaceGui_2.Parent = arg1
		SurfaceGui_2:SetAttribute("ControlledByToggle", true)
		local Frame_4 = Instance.new("Frame")
		Frame_4.Size = UDim2.new(1, 0, 1, 0)
		Frame_4.BackgroundTransparency = 0.7
		Frame_4.BackgroundColor3 = arg2
		Frame_4.BorderSizePixel = 2
		Frame_4.Parent = SurfaceGui_2
		local UICorner_25 = Instance.new("UICorner")
		UICorner_25.CornerRadius = UDim.new(0, 20)
		UICorner_25.Parent = Frame_4
	end
	createBackFace(Part_upvr_5, Color3.fromRGB(0, 0, 0))
	createBackFace(Part_upvr_6, Color3.fromRGB(0, 0, 0))
	return {
		part = Part_upvr_5;
		inputPart = Part_upvr_6;
		frame = Frame_8_upvr;
		frameInput = Frame_upvr;
	}
end
local setupGui_result1_upvw = setupGui_upvr()
LocalPlayer_upvr_2.CharacterAdded:Connect(function() -- Line 910
	--[[ Upvalues[2]:
		[1]: setupGui_result1_upvw (read and write)
		[2]: setupGui_upvr (readonly)
	]]
	setupGui_result1_upvw = setupGui_upvr()
end)
wait(0.5)
;(function() -- Line 916, Named "createCurvedPlayerListGui"
	--[[ Upvalues[1]:
		[1]: playClickSound_upvr (readonly)
	]]
	local LocalPlayer_upvr = game.Players.LocalPlayer
	local Character = LocalPlayer_upvr.Character
	if not Character then
		Character = LocalPlayer_upvr.CharacterAdded:Wait()
	end
	local Head_2_upvw = Character:WaitForChild("Head")
	local Part_upvr_2 = Instance.new("Part")
	Part_upvr_2.Size = Vector3.new(10, 5, 0.001)
	Part_upvr_2.Anchored = false
	Part_upvr_2.CanCollide = false
	Part_upvr_2.Transparency = 0.8
	Part_upvr_2.BrickColor = BrickColor.new("Really black")
	Part_upvr_2.Parent = workspace
	local SurfaceGui_9 = Instance.new("SurfaceGui")
	SurfaceGui_9.Adornee = Part_upvr_2
	SurfaceGui_9.Face = Enum.NormalId.Front
	SurfaceGui_9.CanvasSize = Vector2.new(800, 400)
	SurfaceGui_9.Parent = Part_upvr_2
	SurfaceGui_9:SetAttribute("ControlledByToggle", true)
	local Frame_5 = Instance.new("Frame")
	Frame_5.Size = UDim2.new(1, 0, 1, 0)
	Frame_5.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
	Frame_5.BackgroundTransparency = 0.5
	Frame_5.BorderSizePixel = 0
	Frame_5.Parent = SurfaceGui_9
	local UIStroke_9 = Instance.new("UIStroke")
	UIStroke_9.Parent = Frame_5
	UIStroke_9.Thickness = 6
	UIStroke_9.Color = Color3.new(1, 1, 1)
	UIStroke_9.Transparency = 0.3
	UIStroke_9.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_15 = Instance.new("UICorner")
	UICorner_15.CornerRadius = UDim.new(0, 20)
	UICorner_15.Parent = Frame_5
	local TextLabel_5_upvr = Instance.new("TextLabel")
	TextLabel_5_upvr.Size = UDim2.new(1, 0, 0.1, 0)
	TextLabel_5_upvr.Position = UDim2.new(0, 0, 0, 0)
	TextLabel_5_upvr.BackgroundTransparency = 1
	TextLabel_5_upvr.Text = "Player List (0)"
	TextLabel_5_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextLabel_5_upvr.TextScaled = true
	TextLabel_5_upvr.Font = Enum.Font.SourceSansBold
	TextLabel_5_upvr.Parent = Frame_5
	local ScrollingFrame_upvr = Instance.new("ScrollingFrame")
	ScrollingFrame_upvr.Size = UDim2.new(1, 0, 0.9, 0)
	ScrollingFrame_upvr.Position = UDim2.new(0, 0, 0.1, 0)
	ScrollingFrame_upvr.BackgroundTransparency = 1
	ScrollingFrame_upvr.ScrollBarThickness = 8
	ScrollingFrame_upvr.Parent = Frame_5
	local UIListLayout_upvr = Instance.new("UIListLayout")
	UIListLayout_upvr.SortOrder = Enum.SortOrder.LayoutOrder
	UIListLayout_upvr.Padding = UDim.new(0, 5)
	UIListLayout_upvr.Parent = ScrollingFrame_upvr
	local tbl_upvr = {}
	local function createNotification_upvr(arg1) -- Line 979, Named "createNotification"
		--[[ Upvalues[1]:
			[1]: LocalPlayer_upvr (readonly)
		]]
		local SurfaceGui_6_upvr = Instance.new("SurfaceGui")
		SurfaceGui_6_upvr:SetAttribute("ControlledByToggle", true)
		SurfaceGui_6_upvr.Parent = LocalPlayer_upvr:WaitForChild("PlayerGui")
		local Frame = Instance.new("Frame")
		Frame.Size = UDim2.new(0.3, 0, 0.1, 0)
		Frame.Position = UDim2.new(0.35, 0, 0.8, 0)
		Frame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
		Frame.BackgroundTransparency = 0.3
		Frame.Parent = SurfaceGui_6_upvr
		local TextLabel_18 = Instance.new("TextLabel")
		TextLabel_18.Size = UDim2.new(1, 0, 0.7, 0)
		TextLabel_18.Position = UDim2.new(0, 0, 0, 0)
		TextLabel_18.BackgroundTransparency = 1
		TextLabel_18.Text = arg1
		TextLabel_18.TextColor3 = Color3.new(1, 1, 1)
		TextLabel_18.TextScaled = true
		TextLabel_18.Font = Enum.Font.SourceSansBold
		TextLabel_18.Parent = Frame
		local TextButton_2 = Instance.new("TextButton")
		TextButton_2.Size = UDim2.new(0.5, 0, 0.3, 0)
		TextButton_2.Position = UDim2.new(0, 0, 0.7, 0)
		TextButton_2.BackgroundColor3 = Color3.new(1, 0.5, 0)
		TextButton_2.Text = "Copy Name"
		TextButton_2.TextColor3 = Color3.new(1, 1, 1)
		TextButton_2.TextScaled = true
		TextButton_2.Parent = Frame
		local TextButton_9 = Instance.new("TextButton")
		TextButton_9.Size = UDim2.new(0.5, 0, 0.3, 0)
		TextButton_9.Position = UDim2.new(0.5, 0, 0.7, 0)
		TextButton_9.BackgroundColor3 = Color3.new(1, 0.5, 0)
		TextButton_9.Text = "Copy ID"
		TextButton_9.TextColor3 = Color3.new(1, 1, 1)
		TextButton_9.TextScaled = true
		TextButton_9.Parent = Frame
		task.delay(10, function() -- Line 1019
			--[[ Upvalues[1]:
				[1]: SurfaceGui_6_upvr (readonly)
			]]
			SurfaceGui_6_upvr:Destroy()
		end)
		return TextButton_2, TextButton_9
	end
	local tbl_2_upvw = {}
	local function updatePlayerList_upvr() -- Line 1026, Named "updatePlayerList"
		--[[ Upvalues[6]:
			[1]: ScrollingFrame_upvr (readonly)
			[2]: tbl_2_upvw (read and write)
			[3]: TextLabel_5_upvr (readonly)
			[4]: tbl_upvr (readonly)
			[5]: playClickSound_upvr (copied, readonly)
			[6]: UIListLayout_upvr (readonly)
		]]
		local ipairs_result1, _, ipairs_result3 = ipairs(ScrollingFrame_upvr:GetChildren())
		local var170
		for _, v_3 in ipairs_result1, var170, ipairs_result3 do
			if v_3:IsA("Frame") then
				v_3:Destroy()
			end
		end
		tbl_2_upvw = {}
		local players = game.Players:GetPlayers()
		var170 = TextLabel_5_upvr
		var170.Text = string.format("Player List (%d)", #players)
		var170 = 0
		for i_6, v_4_upvr in ipairs(players) do
			local var175
			if not tbl_2_upvw[v_4_upvr.UserId] then
				local Frame_14 = Instance.new("Frame")
				var175 = -50
				Frame_14.Size = UDim2.new(1, var175, 0, 40)
				Frame_14.BackgroundTransparency = 0.5
				var175 = 0.2
				Frame_14.BackgroundColor3 = Color3.new(0.2, var175, 0.2)
				Frame_14.BorderSizePixel = 1
				Frame_14.LayoutOrder = i_6
				Frame_14.Parent = ScrollingFrame_upvr
				local TextLabel_8 = Instance.new("TextLabel")
				var175 = 0.8
				TextLabel_8.Size = UDim2.new(var175, 0, 1, 0)
				var175 = 0
				TextLabel_8.Position = UDim2.new(var175, 0, 0, 0)
				TextLabel_8.BackgroundTransparency = 0
				var175 = "%s (%s) - UserID: %d"
				TextLabel_8.Text = string.format(var175, v_4_upvr.DisplayName, v_4_upvr.Name, v_4_upvr.UserId)
				var175 = 1
				TextLabel_8.TextColor3 = Color3.new(var175, 1, 1)
				TextLabel_8.TextScaled = true
				TextLabel_8.Font = Enum.Font.SourceSans
				TextLabel_8.Parent = Frame_14
				var175 = "TextButton"
				local any_upvr = Instance.new(var175)
				var175 = UDim2.new(0.2, 0, 1, 0)
				any_upvr.Size = var175
				var175 = UDim2.new(0.8, 0, 0, 0)
				any_upvr.Position = var175
				local function INLINED() -- Internal function, doesn't exist in bytecode
					var175 = Color3.new(1, 1, 0)
					return var175
				end
				if not tbl_upvr[v_4_upvr.UserId] or not INLINED() then
					var175 = Color3.new(0.5, 0.5, 0.5)
				end
				any_upvr.BackgroundColor3 = var175
				if tbl_upvr[v_4_upvr.UserId] then
					var175 = "★"
				else
					var175 = "☆"
				end
				any_upvr.Text = var175
				var175 = Color3.new(1, 1, 1)
				any_upvr.TextColor3 = var175
				var175 = true
				any_upvr.TextScaled = var175
				var175 = Enum.Font.SourceSans
				any_upvr.Font = var175
				any_upvr.Parent = Frame_14
				var175 = Instance.new("UICorner")
				var175.CornerRadius = UDim.new(0, 12)
				var175.Parent = any_upvr
				any_upvr.MouseButton1Click:Connect(function() -- Line 1074
					--[[ Upvalues[4]:
						[1]: playClickSound_upvr (copied, readonly)
						[2]: tbl_upvr (copied, readonly)
						[3]: v_4_upvr (readonly)
						[4]: any_upvr (readonly)
					]]
					playClickSound_upvr()
					tbl_upvr[v_4_upvr.UserId] = not tbl_upvr[v_4_upvr.UserId]
					local var180
					local function INLINED_2() -- Internal function, doesn't exist in bytecode
						var180 = Color3.new(1, 1, 0)
						return var180
					end
					if not tbl_upvr[v_4_upvr.UserId] or not INLINED_2() then
						var180 = Color3.new(0.5, 0.5, 0.5)
					end
					any_upvr.BackgroundColor3 = var180
					if tbl_upvr[v_4_upvr.UserId] then
						var180 = "★"
					else
						var180 = "☆"
					end
					any_upvr.Text = var180
				end)
				tbl_2_upvw[v_4_upvr.UserId] = true
				var170 = var170 + Frame_14.Size.Y.Offset + UIListLayout_upvr.Padding.Offset
			end
		end
		ScrollingFrame_upvr.CanvasSize = UDim2.new(1, 0, 0, var170)
	end
	game.Players.PlayerAdded:Connect(function(arg1) -- Line 1090, Named "onPlayerAdded"
		--[[ Upvalues[3]:
			[1]: tbl_upvr (readonly)
			[2]: createNotification_upvr (readonly)
			[3]: updatePlayerList_upvr (readonly)
		]]
		if tbl_upvr[arg1.UserId] then
			local createNotification_upvr_result1_2, createNotification_upvr_result2_2 = createNotification_upvr(string.format("Your favorite player %s joined!", arg1.DisplayName))
			createNotification_upvr_result1_2.MouseButton1Click:Connect(function() -- Line 1094
				--[[ Upvalues[1]:
					[1]: arg1 (readonly)
				]]
				setclipboard(arg1.Name)
			end)
			createNotification_upvr_result2_2.MouseButton1Click:Connect(function() -- Line 1097
				--[[ Upvalues[1]:
					[1]: arg1 (readonly)
				]]
				setclipboard(tostring(arg1.UserId))
			end)
		end
		updatePlayerList_upvr()
	end)
	game.Players.PlayerRemoving:Connect(function(arg1) -- Line 1104, Named "onPlayerRemoving"
		--[[ Upvalues[3]:
			[1]: tbl_upvr (readonly)
			[2]: createNotification_upvr (readonly)
			[3]: updatePlayerList_upvr (readonly)
		]]
		if tbl_upvr[arg1.UserId] then
			local createNotification_upvr_result1, createNotification_upvr_result2 = createNotification_upvr(string.format("Your favorite player %s left!", arg1.DisplayName))
			createNotification_upvr_result1.MouseButton1Click:Connect(function() -- Line 1108
				--[[ Upvalues[1]:
					[1]: arg1 (readonly)
				]]
				setclipboard(arg1.Name)
			end)
			createNotification_upvr_result2.MouseButton1Click:Connect(function() -- Line 1111
				--[[ Upvalues[1]:
					[1]: arg1 (readonly)
				]]
				setclipboard(tostring(arg1.UserId))
			end)
		end
		updatePlayerList_upvr()
	end)
	updatePlayerList_upvr()
	local var189_upvw = false
	local Position_10_upvw = Part_upvr_2.Position
	game:GetService("RunService").RenderStepped:Connect(function() -- Line 1125, Named "updatePosition"
		--[[ Upvalues[4]:
			[1]: Head_2_upvw (read and write)
			[2]: var189_upvw (read and write)
			[3]: Part_upvr_2 (readonly)
			[4]: Position_10_upvw (read and write)
		]]
		if not var189_upvw then
			Part_upvr_2.Position = Part_upvr_2.Position:Lerp(Head_2_upvw.Position + Vector3.new(5, 3, 10), 1 * game:GetService("RunService").RenderStepped:Wait())
			Position_10_upvw = Part_upvr_2.Position
		else
			Part_upvr_2.Position = Position_10_upvw
		end
		Part_upvr_2.CFrame = CFrame.new(Part_upvr_2.Position, Head_2_upvw.Position)
	end)
	local TextButton_3_upvr = Instance.new("TextButton")
	TextButton_3_upvr.Size = UDim2.new(0.2, 0, 0.1, 0)
	TextButton_3_upvr.Position = UDim2.new(0.8, 0, 0, 0)
	TextButton_3_upvr.BackgroundColor3 = Color3.new(1, 0, 0)
	TextButton_3_upvr.Text = "Lock GUI"
	TextButton_3_upvr.TextColor3 = Color3.new(1, 1, 1)
	TextButton_3_upvr.TextScaled = true
	TextButton_3_upvr.Parent = Frame_5
	local UICorner_13 = Instance.new("UICorner")
	UICorner_13.CornerRadius = UDim.new(0, 12)
	UICorner_13.Parent = TextButton_3_upvr
	TextButton_3_upvr.MouseButton1Click:Connect(function() -- Line 1156
		--[[ Upvalues[5]:
			[1]: var189_upvw (read and write)
			[2]: TextButton_3_upvr (readonly)
			[3]: playClickSound_upvr (copied, readonly)
			[4]: Position_10_upvw (read and write)
			[5]: Part_upvr_2 (readonly)
		]]
		local var194 = var189_upvw
		var189_upvw = not var194
		if var189_upvw then
			var194 = "Unlock GUI"
		else
			var194 = "Lock GUI"
		end
		TextButton_3_upvr.Text = var194
		playClickSound_upvr()
		if var189_upvw then
			Position_10_upvw = Part_upvr_2.Position
		end
	end)
	LocalPlayer_upvr.CharacterAdded:Connect(function(arg1) -- Line 1166
		--[[ Upvalues[2]:
			[1]: Head_2_upvw (read and write)
			[2]: Part_upvr_2 (readonly)
		]]
		Head_2_upvw = arg1:WaitForChild("Head")
		Part_upvr_2.Parent = workspace
	end)
end)()
wait(0.5)
local LocalPlayer = game.Players.LocalPlayer
local Character_3_upvw = LocalPlayer.Character
if not Character_3_upvw then
	Character_3_upvw = LocalPlayer.CharacterAdded:Wait()
end
local Head_6_upvw = Character_3_upvw:WaitForChild("Head")
local Humanoid_upvw = Character_3_upvw:WaitForChild("Humanoid")
local Part_upvr_4 = Instance.new("Part")
Part_upvr_4.Size = Vector3.new(10, 5, 0.1)
Part_upvr_4.Anchored = true
Part_upvr_4.CanCollide = false
Part_upvr_4.Transparency = 1
Part_upvr_4.Parent = workspace
local function createsurface(arg1) -- Line 1187
	--[[ Upvalues[1]:
		[1]: Part_upvr_4 (readonly)
	]]
	local SurfaceGui = Instance.new("SurfaceGui")
	SurfaceGui.Adornee = Part_upvr_4
	SurfaceGui.Face = arg1
	SurfaceGui.CanvasSize = Vector2.new(400, 200)
	SurfaceGui.Parent = Part_upvr_4
	SurfaceGui:SetAttribute("ControlledByToggle", true)
	local Frame_3 = Instance.new("Frame")
	Frame_3.Size = UDim2.new(1, 0, 1, 0)
	Frame_3.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
	Frame_3.BackgroundTransparency = 0.5
	Frame_3.Parent = SurfaceGui
	local UIStroke_4 = Instance.new("UIStroke")
	UIStroke_4.Parent = Frame_3
	UIStroke_4.Thickness = 6
	UIStroke_4.Color = Color3.new(1, 1, 1)
	UIStroke_4.Transparency = 0.3
	UIStroke_4.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_3 = Instance.new("UICorner")
	UICorner_3.CornerRadius = UDim.new(0, 12)
	UICorner_3.Parent = Frame_3
	local TextLabel_15 = Instance.new("TextLabel")
	TextLabel_15.Size = UDim2.new(1, 0, 0.3, 0)
	TextLabel_15.Position = UDim2.new(0, 0, 0, 0)
	TextLabel_15.Text = "Speed: Calculating..."
	TextLabel_15.TextScaled = true
	TextLabel_15.BackgroundTransparency = 1
	TextLabel_15.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_15.Font = Enum.Font.Gotham
	TextLabel_15.Name = "SpeedLabel"
	TextLabel_15.Parent = Frame_3
	local TextLabel_17 = Instance.new("TextLabel")
	TextLabel_17.Size = UDim2.new(1, 0, 0.3, 0)
	TextLabel_17.Position = UDim2.new(0, 0, 0.3, 0)
	TextLabel_17.Text = "Jump Height: Calculating..."
	TextLabel_17.TextScaled = true
	TextLabel_17.BackgroundTransparency = 1
	TextLabel_17.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_17.Font = Enum.Font.Gotham
	TextLabel_17.Name = "JumpHeightLabel"
	TextLabel_17.Parent = Frame_3
	local TextLabel_9 = Instance.new("TextLabel")
	TextLabel_9.Size = UDim2.new(1, 0, 0.3, 0)
	TextLabel_9.Position = UDim2.new(0, 0, 0.6, 0)
	TextLabel_9.Text = "Health: Calculating..."
	TextLabel_9.TextScaled = true
	TextLabel_9.BackgroundTransparency = 1
	TextLabel_9.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_9.Font = Enum.Font.Gotham
	TextLabel_9.Name = "HealthLabel"
	TextLabel_9.Parent = Frame_3
	local TextButton_8 = Instance.new("TextButton")
	TextButton_8.Size = UDim2.new(0.2, 0, 0.1, 0)
	TextButton_8.Position = UDim2.new(0.8, 0, 0, 0)
	TextButton_8.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
	TextButton_8.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextButton_8.Font = Enum.Font.GothamBold
	TextButton_8.Text = "Lock GUI"
	TextButton_8.TextSize = 8
	TextButton_8.TextScaled = true
	TextButton_8.Parent = Frame_3
	local UICorner_26 = Instance.new("UICorner")
	UICorner_26.CornerRadius = UDim.new(0, 8)
	UICorner_26.Parent = TextButton_8
	return SurfaceGui, TextButton_8, TextLabel_15, TextLabel_17, TextLabel_9
end
local _, createsurface_result2_upvr, createsurface_result3_upvr_2, createsurface_result4_upvr, createsurface_result5_upvr = createsurface(Enum.NormalId.Front)
local _, createsurface_result2_upvr_2, createsurface_result3_upvr, createsurface_result4_upvr_2, createsurface_result5_upvr_2 = createsurface(Enum.NormalId.Back)
local RunService_upvr = game:GetService("RunService")
local Position_5_upvw = Character_3_upvw.PrimaryPart.Position
local var222_upvw = false
local var223_upvw
local function updateGuiPosition_upvr() -- Line 1274, Named "updateGuiPosition"
	--[[ Upvalues[5]:
		[1]: var223_upvw (read and write)
		[2]: RunService_upvr (readonly)
		[3]: var222_upvw (read and write)
		[4]: Head_6_upvw (read and write)
		[5]: Part_upvr_4 (readonly)
	]]
	if var223_upvw then
		var223_upvw:Disconnect()
	end
	var223_upvw = RunService_upvr.RenderStepped:Connect(function() -- Line 1279
		--[[ Upvalues[3]:
			[1]: var222_upvw (copied, read and write)
			[2]: Head_6_upvw (copied, read and write)
			[3]: Part_upvr_4 (copied, readonly)
		]]
		if not var222_upvw then
			Part_upvr_4.CFrame = CFrame.new(Part_upvr_4.Position:Lerp((Head_6_upvw.CFrame * CFrame.new(0, 5, 5)).Position, 0.05), Head_6_upvw.Position)
		end
	end)
end
local var225_upvw
local tick_result1_upvw_2 = tick()
local function updateStats_upvr() -- Line 1287, Named "updateStats"
	--[[ Upvalues[12]:
		[1]: var225_upvw (read and write)
		[2]: RunService_upvr (readonly)
		[3]: Character_3_upvw (read and write)
		[4]: Position_5_upvw (read and write)
		[5]: tick_result1_upvw_2 (read and write)
		[6]: createsurface_result3_upvr_2 (readonly)
		[7]: createsurface_result3_upvr (readonly)
		[8]: createsurface_result4_upvr (readonly)
		[9]: Humanoid_upvw (read and write)
		[10]: createsurface_result4_upvr_2 (readonly)
		[11]: createsurface_result5_upvr (readonly)
		[12]: createsurface_result5_upvr_2 (readonly)
	]]
	if var225_upvw then
		var225_upvw:Disconnect()
	end
	var225_upvw = RunService_upvr.RenderStepped:Connect(function() -- Line 1292
		--[[ Upvalues[10]:
			[1]: Character_3_upvw (copied, read and write)
			[2]: Position_5_upvw (copied, read and write)
			[3]: tick_result1_upvw_2 (copied, read and write)
			[4]: createsurface_result3_upvr_2 (copied, readonly)
			[5]: createsurface_result3_upvr (copied, readonly)
			[6]: createsurface_result4_upvr (copied, readonly)
			[7]: Humanoid_upvw (copied, read and write)
			[8]: createsurface_result4_upvr_2 (copied, readonly)
			[9]: createsurface_result5_upvr (copied, readonly)
			[10]: createsurface_result5_upvr_2 (copied, readonly)
		]]
		Position_5_upvw = Character_3_upvw.PrimaryPart.Position
		tick_result1_upvw_2 = tick()
		createsurface_result3_upvr_2.Text = "Speed: "..string.format("%.1f", (Character_3_upvw.PrimaryPart.Position - Position_5_upvw).magnitude / (tick() - tick_result1_upvw_2)).." studs/sec"
		createsurface_result3_upvr.Text = createsurface_result3_upvr_2.Text
		createsurface_result4_upvr.Text = "Jump Height: "..string.format("%.1f", Humanoid_upvw.JumpPower).." studs"
		createsurface_result4_upvr_2.Text = createsurface_result4_upvr.Text
		createsurface_result5_upvr.Text = "Health: "..string.format("%.0f", Humanoid_upvw.Health / Humanoid_upvw.MaxHealth * 100)..'%'
		createsurface_result5_upvr_2.Text = createsurface_result5_upvr.Text
	end)
end
createsurface_result2_upvr.MouseButton1Click:Connect(function() -- Line 1308
	--[[ Upvalues[4]:
		[1]: var222_upvw (read and write)
		[2]: createsurface_result2_upvr (readonly)
		[3]: createsurface_result2_upvr_2 (readonly)
		[4]: playClickSound_upvr (readonly)
	]]
	var222_upvw = not var222_upvw
	if var222_upvw then
		createsurface_result2_upvr.Text = "Unlock GUI"
		createsurface_result2_upvr.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
		createsurface_result2_upvr_2.Text = "Unlock GUI"
		createsurface_result2_upvr_2.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
		playClickSound_upvr()
	else
		createsurface_result2_upvr.Text = "Lock GUI"
		createsurface_result2_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
		createsurface_result2_upvr_2.Text = "Lock GUI"
		createsurface_result2_upvr_2.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
		playClickSound_upvr()
	end
end)
createsurface_result2_upvr_2.MouseButton1Click:Connect(function() -- Line 1325
	--[[ Upvalues[4]:
		[1]: var222_upvw (read and write)
		[2]: createsurface_result2_upvr (readonly)
		[3]: createsurface_result2_upvr_2 (readonly)
		[4]: playClickSound_upvr (readonly)
	]]
	var222_upvw = not var222_upvw
	if var222_upvw then
		createsurface_result2_upvr.Text = "Unlock GUI"
		createsurface_result2_upvr.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
		createsurface_result2_upvr_2.Text = "Unlock GUI"
		createsurface_result2_upvr_2.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
		playClickSound_upvr()
	else
		createsurface_result2_upvr.Text = "Lock GUI"
		createsurface_result2_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
		createsurface_result2_upvr_2.Text = "Lock GUI"
		createsurface_result2_upvr_2.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
		playClickSound_upvr()
	end
end)
updateGuiPosition_upvr()
updateStats_upvr()
LocalPlayer.CharacterAdded:Connect(function(arg1) -- Line 1345
	--[[ Upvalues[6]:
		[1]: Character_3_upvw (read and write)
		[2]: Head_6_upvw (read and write)
		[3]: Humanoid_upvw (read and write)
		[4]: Position_5_upvw (read and write)
		[5]: updateGuiPosition_upvr (readonly)
		[6]: updateStats_upvr (readonly)
	]]
	Character_3_upvw = arg1
	Head_6_upvw = arg1:WaitForChild("Head")
	Humanoid_upvw = arg1:WaitForChild("Humanoid")
	Position_5_upvw = arg1.PrimaryPart.Position
	updateGuiPosition_upvr()
	updateStats_upvr()
end)
wait(0.4)
local LocalPlayer_2_upvr = game.Players.LocalPlayer
local Character_5 = LocalPlayer_2_upvr.Character
if not Character_5 then
	Character_5 = LocalPlayer_2_upvr.CharacterAdded:Wait()
end
local Head_4_upvw = Character_5:WaitForChild("Head")
local function initializeGUI_upvr() -- Line 1366, Named "initializeGUI"
	--[[ Upvalues[3]:
		[1]: LocalPlayer_2_upvr (readonly)
		[2]: playClickSound_upvr (readonly)
		[3]: Head_4_upvw (read and write)
	]]
	local FloatingPart = workspace:FindFirstChild("FloatingPart")
	if FloatingPart then
		FloatingPart:Destroy()
	end
	local Part_upvr = Instance.new("Part")
	Part_upvr.Name = "FloatingPart"
	Part_upvr.Size = Vector3.new(10, 5, 0.1)
	Part_upvr.Anchored = true
	Part_upvr.CanCollide = false
	Part_upvr.Transparency = 1
	Part_upvr.Parent = workspace
	local SurfaceGui_7 = Instance.new("SurfaceGui")
	SurfaceGui_7.Adornee = Part_upvr
	SurfaceGui_7.Face = Enum.NormalId.Front
	SurfaceGui_7.CanvasSize = Vector2.new(600, 300)
	SurfaceGui_7.Parent = Part_upvr
	SurfaceGui_7:SetAttribute("ControlledByToggle", true)
	local Frame_12 = Instance.new("Frame")
	Frame_12.Size = UDim2.new(1, 0, 1, 0)
	Frame_12.BackgroundTransparency = 0.4
	Frame_12.BackgroundColor3 = Color3.new(0, 0, 0)
	Frame_12.BorderSizePixel = 2
	Frame_12.ClipsDescendants = true
	Frame_12.Parent = SurfaceGui_7
	local UIStroke_8 = Instance.new("UIStroke")
	UIStroke_8.Parent = Frame_12
	UIStroke_8.Thickness = 6
	UIStroke_8.Color = Color3.new(1, 1, 1)
	UIStroke_8.Transparency = 0.3
	UIStroke_8.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	local UICorner_21 = Instance.new("UICorner")
	UICorner_21.CornerRadius = UDim.new(0, 20)
	UICorner_21.Parent = Frame_12
	local TextLabel = Instance.new("TextLabel")
	TextLabel.Size = UDim2.new(0.6, 0, 0.2, 0)
	TextLabel.Position = UDim2.new(0.2, 0, 0.1, 0)
	TextLabel.Text = LocalPlayer_2_upvr.DisplayName.." (@ "..LocalPlayer_2_upvr.Name..')'
	TextLabel.TextScaled = true
	TextLabel.BackgroundTransparency = 1
	TextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel.Font = Enum.Font.GothamBold
	TextLabel.Parent = Frame_12
	local UICorner = Instance.new("UICorner")
	UICorner.CornerRadius = UDim.new(0, 20)
	UICorner.Parent = TextLabel
	local TextLabel_13 = Instance.new("TextLabel")
	TextLabel_13.Size = UDim2.new(0.6, 0, 0.1, 0)
	TextLabel_13.Position = UDim2.new(0.2, 0, 0.3, 0)
	TextLabel_13.Text = "UserID: "..LocalPlayer_2_upvr.UserId
	TextLabel_13.TextScaled = true
	TextLabel_13.BackgroundTransparency = 1
	TextLabel_13.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_13.Font = Enum.Font.Gotham
	TextLabel_13.Parent = Frame_12
	local UICorner_20 = Instance.new("UICorner")
	UICorner_20.CornerRadius = UDim.new(0, 20)
	UICorner_20.Parent = TextLabel_13
	local ImageLabel = Instance.new("ImageLabel")
	ImageLabel.Size = UDim2.new(0.2, 0, 0.4, 0)
	ImageLabel.Position = UDim2.new(0, 0, 0, 0.01)
	ImageLabel.Image = "rbxthumb://type=AvatarHeadShot&id="..LocalPlayer_2_upvr.UserId.."&w=420&h=420"
	ImageLabel.BackgroundTransparency = 1
	ImageLabel.Parent = Frame_12
	local UICorner_4 = Instance.new("UICorner")
	UICorner_4.CornerRadius = UDim.new(0, 20)
	UICorner_4.Parent = ImageLabel
	local TextLabel_16_upvr = Instance.new("TextLabel")
	TextLabel_16_upvr.Size = UDim2.new(0.6, 0, 0.1, 0)
	TextLabel_16_upvr.Position = UDim2.new(0.2, 0, 0.5, 0)
	TextLabel_16_upvr.Text = "FPS: Calculating..."
	TextLabel_16_upvr.TextScaled = true
	TextLabel_16_upvr.BackgroundTransparency = 1
	TextLabel_16_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_16_upvr.Font = Enum.Font.Gotham
	TextLabel_16_upvr.Parent = Frame_12
	local UICorner_12 = Instance.new("UICorner")
	UICorner_12.CornerRadius = UDim.new(0, 20)
	UICorner_12.Parent = TextLabel_16_upvr
	local TextLabel_14_upvr = Instance.new("TextLabel")
	TextLabel_14_upvr.Size = UDim2.new(0.6, 0, 0.1, 0)
	TextLabel_14_upvr.Position = UDim2.new(0.2, 0, 0.6, 0)
	TextLabel_14_upvr.Text = "Ping: Calculating..."
	TextLabel_14_upvr.TextScaled = true
	TextLabel_14_upvr.BackgroundTransparency = 1
	TextLabel_14_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_14_upvr.Font = Enum.Font.Gotham
	TextLabel_14_upvr.Parent = Frame_12
	local UICorner_9 = Instance.new("UICorner")
	UICorner_9.CornerRadius = UDim.new(0, 20)
	UICorner_9.Parent = TextLabel_14_upvr
	local TextLabel_2 = Instance.new("TextLabel")
	TextLabel_2.Size = UDim2.new(0.6, 0, 0.1, 0)
	TextLabel_2.Position = UDim2.new(0.2, 0, 0.7, 0)
	TextLabel_2.Text = "Join Date: "..LocalPlayer_2_upvr.AccountAge.." days"
	TextLabel_2.TextScaled = true
	TextLabel_2.BackgroundTransparency = 1
	TextLabel_2.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextLabel_2.Font = Enum.Font.Gotham
	TextLabel_2.Parent = Frame_12
	local UICorner_19 = Instance.new("UICorner")
	UICorner_19.CornerRadius = UDim.new(0, 20)
	UICorner_19.Parent = TextLabel_2
	local SurfaceGui_3 = Instance.new("SurfaceGui")
	SurfaceGui_3.Adornee = Part_upvr
	SurfaceGui_3.Face = Enum.NormalId.Back
	SurfaceGui_3.CanvasSize = Vector2.new(600, 300)
	SurfaceGui_3.Parent = Part_upvr
	SurfaceGui_3:SetAttribute("ControlledByToggle", true)
	local Frame_7 = Instance.new("Frame")
	Frame_7.Size = UDim2.new(1, 0, 1, 0)
	Frame_7.BackgroundTransparency = 0.8
	Frame_7.BackgroundColor3 = Color3.new(0, 0, 0)
	Frame_7.BorderSizePixel = 2
	Frame_7.Parent = SurfaceGui_3
	local UICorner_18 = Instance.new("UICorner")
	UICorner_18.CornerRadius = UDim.new(0, 20)
	UICorner_18.Parent = Frame_7
	local TextButton_7_upvr = Instance.new("TextButton")
	TextButton_7_upvr.Size = UDim2.new(0.2, 0, 0.1, 0)
	TextButton_7_upvr.Position = UDim2.new(0.8, 0, 0, 0)
	TextButton_7_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
	TextButton_7_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextButton_7_upvr.Font = Enum.Font.GothamBold
	TextButton_7_upvr.Text = "Lock GUI"
	TextButton_7_upvr.TextSize = 25
	TextButton_7_upvr.Parent = Frame_12
	local UICorner_6 = Instance.new("UICorner")
	UICorner_6.CornerRadius = UDim.new(0, 8)
	UICorner_6.Parent = TextButton_7_upvr
	local var257_upvw = false
	TextButton_7_upvr.MouseButton1Click:Connect(function() -- Line 1520
		--[[ Upvalues[3]:
			[1]: var257_upvw (read and write)
			[2]: TextButton_7_upvr (readonly)
			[3]: playClickSound_upvr (copied, readonly)
		]]
		var257_upvw = not var257_upvw
		if var257_upvw then
			TextButton_7_upvr.Text = "Unlock GUI"
			TextButton_7_upvr.BackgroundColor3 = Color3.fromRGB(255, 50, 50)
			playClickSound_upvr()
		else
			TextButton_7_upvr.Text = "Lock GUI"
			TextButton_7_upvr.BackgroundColor3 = Color3.fromRGB(50, 50, 255)
			playClickSound_upvr()
		end
	end)
	local var260_upvw = 0
	local tick_result1_upvw = tick()
	game:GetService("RunService").RenderStepped:Connect(function(arg1) -- Line 1535
		--[[ Upvalues[4]:
			[1]: var260_upvw (read and write)
			[2]: tick_result1_upvw (read and write)
			[3]: TextLabel_16_upvr (readonly)
			[4]: TextLabel_14_upvr (readonly)
		]]
		var260_upvw += 1
		if 1 <= tick() - tick_result1_upvw then
			TextLabel_16_upvr.Text = "FPS: "..var260_upvw
			var260_upvw = 0
			tick_result1_upvw = tick()
		end
		TextLabel_14_upvr.Text = "Ping: "..game:GetService("Stats").Network.ServerStatsItem["Data Ping"]:GetValueString().." ms"
	end)
	game:GetService("RunService").RenderStepped:Connect(function() -- Line 1547
		--[[ Upvalues[3]:
			[1]: var257_upvw (read and write)
			[2]: Head_4_upvw (copied, read and write)
			[3]: Part_upvr (readonly)
		]]
		if not var257_upvw then
			Part_upvr.CFrame = Part_upvr.CFrame:Lerp(CFrame.new((Head_4_upvw.CFrame * CFrame.new(5, 2, -5)).Position, Head_4_upvw.Position), 0.1)
		end
	end)
end
initializeGUI_upvr()
LocalPlayer_2_upvr.CharacterAdded:Connect(function(arg1) -- Line 1559
	--[[ Upvalues[2]:
		[1]: Head_4_upvw (read and write)
		[2]: initializeGUI_upvr (readonly)
	]]
	Head_4_upvw = arg1:WaitForChild("Head")
	initializeGUI_upvr()
end)
local Character_2 = game.Players.LocalPlayer.Character
if not Character_2 then
	Character_2 = game.Players.LocalPlayer.CharacterAdded:Wait()
end
local Part_upvr_7 = Instance.new("Part")
Part_upvr_7.Size = Vector3.new(10, 5, 0.1)
Part_upvr_7.Anchored = true
Part_upvr_7.CanCollide = false
Part_upvr_7.Transparency = 1
Part_upvr_7.Parent = workspace
local SurfaceGui_11 = Instance.new("SurfaceGui")
SurfaceGui_11.Adornee = Part_upvr_7
SurfaceGui_11.Face = Enum.NormalId.Front
SurfaceGui_11.CanvasSize = Vector2.new(600, 300)
SurfaceGui_11.Parent = Part_upvr_7
SurfaceGui_11:SetAttribute("ControlledByToggle", true)
local Frame_2 = Instance.new("Frame")
Frame_2.Size = UDim2.new(1, 0, 1, 0)
Frame_2.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
Frame_2.BorderSizePixel = 0
Frame_2.BorderColor3 = Color3.fromRGB(0, 0, 0)
Frame_2.BackgroundTransparency = 0.4
Frame_2.Parent = SurfaceGui_11
local UIStroke_6 = Instance.new("UIStroke")
UIStroke_6.Parent = Frame_2
UIStroke_6.Thickness = 6
UIStroke_6.Color = Color3.new(1, 1, 1)
UIStroke_6.Transparency = 0.3
UIStroke_6.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
local UICorner_17 = Instance.new("UICorner")
UICorner_17.CornerRadius = UDim.new(0, 20)
UICorner_17.Parent = Frame_2
local TextLabel_10 = Instance.new("TextLabel")
TextLabel_10.Size = UDim2.new(1, 0, 0.8, 0)
TextLabel_10.BackgroundTransparency = 1
TextLabel_10.TextColor3 = Color3.new(1, 1, 1)
TextLabel_10.Font = Enum.Font.GothamBold
TextLabel_10.Text = "Welcome to\nSmartFloat!\n(The credit is on the back)\nEnjoy!"
TextLabel_10.TextScaled = true
TextLabel_10.Parent = Frame_2
local SurfaceGui_8 = Instance.new("SurfaceGui")
SurfaceGui_8.Adornee = Part_upvr_7
SurfaceGui_8.Face = Enum.NormalId.Back
SurfaceGui_8.CanvasSize = Vector2.new(600, 300)
SurfaceGui_8.Parent = Part_upvr_7
SurfaceGui_8:SetAttribute("ControlledByToggle", true)
local Frame_13 = Instance.new("Frame")
Frame_13.Size = UDim2.new(1, 0, 1, 0)
Frame_13.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
Frame_13.BorderSizePixel = 0
Frame_13.BorderColor3 = Color3.fromRGB(0, 0, 0)
Frame_13.BackgroundTransparency = 0.4
Frame_13.Parent = SurfaceGui_8
local UIStroke_2 = Instance.new("UIStroke")
UIStroke_2.Parent = Frame_13
UIStroke_2.Thickness = 6
UIStroke_2.Color = Color3.new(1, 1, 1)
UIStroke_2.Transparency = 0.3
UIStroke_2.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
local UICorner_27 = Instance.new("UICorner")
UICorner_27.CornerRadius = UDim.new(0, 20)
UICorner_27.Parent = Frame_13
local TextLabel_12 = Instance.new("TextLabel")
TextLabel_12.Size = UDim2.new(1, 0, 0.8, 0)
TextLabel_12.BackgroundTransparency = 1
TextLabel_12.TextColor3 = Color3.new(1, 1, 1)
TextLabel_12.Font = Enum.Font.GothamBold
TextLabel_12.Text = "Credits: \n• FyanScripts - Fyan\n• luauruler26 - Fyan\n• My name: Fyan/Fian\n*Thank you guys!*"
TextLabel_12.TextScaled = true
TextLabel_12.Parent = Frame_13
local Head_upvr = Character_2:WaitForChild("Head")
game:GetService("RunService").RenderStepped:Connect(function() -- Line 1645
	--[[ Upvalues[2]:
		[1]: Head_upvr (readonly)
		[2]: Part_upvr_7 (readonly)
	]]
	Part_upvr_7.CFrame = CFrame.new((Head_upvr.CFrame * CFrame.new(-3, 2, -5)).Position, Head_upvr.Position):Lerp(Part_upvr_7.CFrame, 0.95)
end)
local TextButton_5 = Instance.new("TextButton")
TextButton_5.Size = UDim2.new(0.2, 0, 0.2, 0)
TextButton_5.Position = UDim2.new(0.8, 0, 0, 0)
TextButton_5.BackgroundColor3 = Color3.new(0.2, 0.2, 0.2)
TextButton_5.TextColor3 = Color3.new(1, 1, 1)
TextButton_5.Font = Enum.Font.GothamBold
TextButton_5.Text = 'X'
TextButton_5.TextSize = 40
TextButton_5.Parent = Frame_2
local UICorner_16 = Instance.new("UICorner")
UICorner_16.CornerRadius = UDim.new(0, 12)
UICorner_16.Parent = TextButton_5
TextButton_5.MouseButton1Click:Connect(function() -- Line 1666, Named "closeGui"
	--[[ Upvalues[1]:
		[1]: Part_upvr_7 (readonly)
	]]
	Part_upvr_7:Destroy()
end)
local ToggleKeybind_upvr = _G.ToggleKeybind
if not ToggleKeybind_upvr then
	ToggleKeybind_upvr = Enum.KeyCode.F
end
local UserInputService_upvr = game:GetService("UserInputService")
;(function() -- Line 1678, Named "createGui"
	--[[ Upvalues[3]:
		[1]: Part_upvr_7 (readonly)
		[2]: UserInputService_upvr (readonly)
		[3]: ToggleKeybind_upvr (readonly)
	]]
	local ScreenGui = Instance.new("ScreenGui", game.CoreGui)
	ScreenGui.Name = "FloatingGuiToggle"
	ScreenGui.ResetOnSpawn = false
	local TextButton_13_upvr = Instance.new("TextButton")
	TextButton_13_upvr.Size = UDim2.new(0, 30, 0, 30)
	TextButton_13_upvr.Position = UDim2.new(1, -130, 0, 20)
	TextButton_13_upvr.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
	TextButton_13_upvr.TextColor3 = Color3.fromRGB(255, 255, 255)
	TextButton_13_upvr.Text = "Sf"
	TextButton_13_upvr.Font = Enum.Font.GothamBold
	TextButton_13_upvr.TextSize = 8
	TextButton_13_upvr.TextScaled = true
	TextButton_13_upvr.BackgroundTransparency = 0
	TextButton_13_upvr.TextTransparency = 0
	TextButton_13_upvr.Parent = ScreenGui
	TextButton_13_upvr.Draggable = true
	Instance.new("UICorner", TextButton_13_upvr).CornerRadius = UDim.new(0, 8)
	local TweenService_upvr_2 = game:GetService("TweenService")
	TextButton_13_upvr.BackgroundTransparency = 1
	TextButton_13_upvr.TextTransparency = 1
	TextButton_13_upvr.Visible = true
	;(function() -- Line 1703, Named "fadeIn"
		--[[ Upvalues[2]:
			[1]: TweenService_upvr_2 (readonly)
			[2]: TextButton_13_upvr (readonly)
		]]
		TweenService_upvr_2:Create(TextButton_13_upvr, TweenInfo.new(2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
			BackgroundTransparency = 0;
			TextTransparency = 0;
		}):Play()
	end)()
	game:GetService("Players").LocalPlayer.Chatted:Connect(function(arg1) -- Line 1728
		--[[ Upvalues[1]:
			[1]: TextButton_13_upvr (readonly)
		]]
		local string_split_result1 = string.split(arg1, ' ')
		if string_split_result1[1] == "/sf" and string_split_result1[2] then
			local any_lower_result1 = string_split_result1[2]:lower()
			if any_lower_result1 == "hidetoggle" then
				TextButton_13_upvr.Visible = false
				return
			end
			if any_lower_result1 == "showtoggle" then
				TextButton_13_upvr.Visible = true
			end
		end
	end)
	local var290_upvw = true
	local function toggletoggleSmartFloat_upvr() -- Line 1747, Named "toggletoggleSmartFloat"
		--[[ Upvalues[2]:
			[1]: var290_upvw (read and write)
			[2]: Part_upvr_7 (copied, readonly)
		]]
		var290_upvw = not var290_upvw
		Part_upvr_7.CanCollide = false
		for _, v_5 in ipairs(workspace:GetChildren()) do
			if v_5:IsA("Part") then
				for _, v_6 in ipairs(v_5:GetChildren()) do
					if v_6:IsA("SurfaceGui") then
						local ControlledByToggle = v_6:GetAttribute("ControlledByToggle")
						if ControlledByToggle then
							if var290_upvw then
								ControlledByToggle = 0.8
							else
								ControlledByToggle = 1
							end
							v_5.Transparency = ControlledByToggle
							ControlledByToggle = false
							v_5.CanCollide = ControlledByToggle
							ControlledByToggle = var290_upvw
							v_6.Enabled = ControlledByToggle
						end
					end
				end
			end
		end
	end
	TextButton_13_upvr.MouseButton1Click:Connect(toggletoggleSmartFloat_upvr)
	UserInputService_upvr.InputBegan:Connect(function(arg1, arg2) -- Line 1766
		--[[ Upvalues[2]:
			[1]: ToggleKeybind_upvr (copied, readonly)
			[2]: toggletoggleSmartFloat_upvr (readonly)
		]]
		if arg2 then
		elseif arg1.KeyCode == ToggleKeybind_upvr then
			toggletoggleSmartFloat_upvr()
		end
	end)
end)()
print("ℹ️ SmartFloat // SmartFloat Loaded!")
warn("⚠️ SmartFloat // If there is a bug, you can report it to this email: fiangaming005@gmail.com")
SetNotify("ℹ️ SmartFloat", "SmartFloat Loaded!", 5)
wait(3)
SetNotify("ℹ️ SmartFloat", "Thank you for using SmartFloat!", 5)